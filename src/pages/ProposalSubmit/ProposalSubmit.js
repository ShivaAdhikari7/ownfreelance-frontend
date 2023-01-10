import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { FiDollarSign } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { BiBrain } from 'react-icons/bi';

import { MdAttachFile, MdDelete } from 'react-icons/md';
import { MdFullscreen } from 'react-icons/md';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

import proposalPageShield from 'assets/images/proposal-page-shield.png';
import Input from 'components/Input/Input';
import TextArea from 'components/TextArea/TextArea';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import AuthContext from 'context/AuthContext/auth-context';

const MAX_ATTACHMENT_SIZE = 25.0;

const ProposalSubmit = () => {
  const navigate = useNavigate();
  const {
    state: { jobDetail },
  } = useLocation();
  const { token } = useContext(AuthContext);

  const [hourlyRate, setHourlyRate] = useState('');
  const [finalAmount, setFinalAmount] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [attachmentName, setAttachmentName] = useState('');
  const [attachmentValue, setAttachmentValue] = useState('');
  const [serviceFee, setServiceFee] = useState('');

  const [attachmentError, setAttachmentError] = useState('');
  const [termsHasError, setTermsHasError] = useState(false);
  const [coverLetterHasError, setCoverLetterHasError] = useState(false);

  const hourlyRateChangeHandler = e => {
    const rate = +e.target.value;
    const serviceFee = rate * 0.2;
    const finalAmount = rate - serviceFee;

    setTermsHasError(!(rate && finalAmount));
    setHourlyRate(rate.toFixed(2));
    setServiceFee(serviceFee.toFixed(2));
    setFinalAmount(finalAmount.toFixed(2));
  };

  const finalAmountChangeHandler = e => {
    const finalAmount = +e.target.value;
    const rate = (finalAmount / 80) * 100;
    const serviceFee = rate - finalAmount;

    setTermsHasError(!(finalAmount && rate));
    setHourlyRate(rate.toFixed(2));
    setServiceFee(serviceFee.toFixed(2));
    setFinalAmount(finalAmount.toFixed(2));
  };

  const coverLetterChangeHandler = e => {
    setCoverLetter(e.target.value);
    setCoverLetterHasError(!e.target.value);
  };

  const attachmentFileChangeHandler = e => {
    const file = e.target.files[0];
    setAttachmentValue(e.target.value);

    if (file.type !== 'application/x-zip-compressed') {
      setAttachmentError('File can only be of type zip.');
      setAttachmentFile(null);
      setAttachmentName('');
      return;
    }

    if (+(file.size / 1000000).toFixed(2) > MAX_ATTACHMENT_SIZE) {
      setAttachmentError('File size can only be upto 25MB.');
      setAttachmentFile(null);
      setAttachmentName('');
      return;
    }

    if (attachmentError) setAttachmentError('');

    setAttachmentName(file.name);
    setAttachmentFile(file);
  };

  const removeAttachmentHandler = () => {
    setAttachmentFile(null);
    setAttachmentName('');
    setAttachmentValue('');
  };

  const proposalSubmitHandler = async () => {
    const isTermsFulfilled = hourlyRate && finalAmount;
    const isCoverLetterWritten = coverLetter.trim().length > 0;

    setTermsHasError(!isTermsFulfilled);
    setCoverLetterHasError(!isCoverLetterWritten);

    if (!isTermsFulfilled || !isCoverLetterWritten) return;

    setTermsHasError(false);
    setCoverLetterHasError(false);

    const data = new FormData();

    data.append('bidRate', +hourlyRate);
    data.append('coverLetter', coverLetter);
    data.append('attachment', attachmentFile);
    data.append('attachmentName', attachmentName);
    data.append('userId', jobDetail.userId._id);
    data.append('jobTitle', jobDetail.headline);
    data.append(
      'notification',
      JSON.stringify({
        label: 'You have new proposal on your project',
        read: false,
      })
    );

    const response = await axios.post(
      'http://localhost:90/proposal/add',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      navigate('/proposal/submit/success', {
        state: {
          hourlyRate,
          coverLetter,
          attachmentFile,
          jobDetail,
          attachedFileUrl: response.data.attachedFileUrl,
        },
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 submit-proposal">
        <h2 className="heading mb-5">Submit a Proposal</h2>

        <div className="section-job-detail p-5 mb-5 w-100">
          <h3 className="mb-5">Job details</h3>

          <div className="row justify-content-between mb-5 job-info pb-3">
            <div className="col-8">
              <h4 className="job-title mb-4">{jobDetail.headline}</h4>

              <div className="d-flex flex-row align-items-center gap-3 mb-4">
                <span className="required-job-title py-2 px-3">
                  {jobDetail.requiredJobTitle}
                </span>
                <span className="posted-date">Posted Jan 4, 2022</span>
              </div>

              <p className="job-description">{jobDetail.description}</p>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column gap-5 project-detail ps-4">
                <div className="d-flex flex-row gap-2">
                  <BiBrain className="brain-icon" />

                  <div className="d-flex flex-column gap-1">
                    <strong>{jobDetail.scope.projectExperienceLevel}</strong>
                    <span>Experience Level</span>
                  </div>
                </div>

                <div className="d-flex flex-row gap-2">
                  <FiDollarSign className="job-info-icon" />

                  <div className="d-flex flex-column gap-1">
                    <strong>${jobDetail.hourlyRate}/hr</strong>
                    <span>Hourly Rate</span>
                  </div>
                </div>

                <div className="d-flex flex-row gap-2">
                  <MdFullscreen className="job-info-icon job-info-icon-size" />

                  <div className="d-flex flex-column gap-1">
                    <strong>{jobDetail.scope.projectSize}</strong>
                    <span>Project Size</span>
                  </div>
                </div>

                <div className="d-flex flex-row gap-2">
                  <FiCalendar className="job-info-icon" />

                  <div className="d-flex flex-column gap-1">
                    <strong>{jobDetail.scope.projectDuration}</strong>
                    <span>Project Length</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills w-50">
            <h4 className="mb-4">Skills and expertise</h4>
            <div className="d-flex align-items-center flex-wrap gap-4">
              {jobDetail.skills.map(skill => (
                <span key={skill.id} className="skill py-2 px-3">
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-terms p-5 mb-5 w-100">
          <h3 className="mb-5">Terms</h3>

          <div className="row">
            <div className="col-8">
              <h4 className="bid-heading mb-3">
                What is the price you'd like to bid for this job?
              </h4>

              <div className="rate-info d-flex align-items-center justify-content-between mb-5">
                <span>Your profile rate: $10.00/hr</span>
                <span>Client budget: $15.00/hr</span>
              </div>

              <div className="d-flex flex-column gap-5 inputs mb-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <strong>Hourly Rate</strong>
                    <p>Total amount the client will see on your proposal</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <Input
                      value={hourlyRate}
                      onChange={hourlyRateChangeHandler}
                      className="text-end"
                      type="number"
                      placeholder="$ 10.00"
                    />
                    <span>/hr</span>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <strong>20% OwnFreelance Service Fee</strong>

                  <div className="d-flex gap-2 align-items-center">
                    <Input
                      type="number"
                      value={serviceFee}
                      className="text-end"
                      disabled={true}
                      placeholder="- $ 2.00"
                    />
                    <span>/hr</span>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <strong>You'll Receive</strong>
                    <p>
                      The estimated amount you'll receive after service fees
                    </p>
                  </div>

                  <div className="d-flex gap-2 align-items-center">
                    <Input
                      onChange={finalAmountChangeHandler}
                      value={finalAmount}
                      type="number"
                      className="text-end"
                      placeholder="$ 8.00"
                    />
                    <span>/hr</span>
                  </div>
                </div>
              </div>
              {termsHasError && (
                <p className="error-msg">You need to bid for the job.</p>
              )}
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                className="shield-img"
                src={proposalPageShield}
                alt="Shield icon with dollar sign"
              />
            </div>
          </div>
        </div>

        <div className="section-impressions p-5 mb-5 w-100">
          <div className="cover-letter mb-5">
            <h4 className="mb-4 impression-heading">Cover Letter</h4>
            <TextArea
              onChange={coverLetterChangeHandler}
              placeholder="Impress client with your cover letter"
              className="mb-3"
            />
            {coverLetterHasError && (
              <p className="error-msg">You must attach a cover letter.</p>
            )}
          </div>
          <div className="attachments">
            <h4 className="mb-4 impression-heading">Attachments</h4>

            <div className="dragged-file-name mb-3 d-flex align-items-center gap-3">
              {attachmentName && (
                <>
                  <div>
                    <MdAttachFile /> <span>{attachmentName}</span>
                  </div>
                  <MdDelete
                    role="button"
                    onClick={removeAttachmentHandler}
                    className="icon-delete"
                  />
                </>
              )}
            </div>

            <div className="dropzone d-flex align-items-center justify-content-center position-relative mb-3">
              <p className="m-0">
                Drag or <span className="upload">upload </span>
                project files
              </p>

              <input
                className="position-absolute file-drop-input"
                type="file"
                onChange={attachmentFileChangeHandler}
                value={attachmentValue}
              />
            </div>
            {attachmentError && (
              <p className="error-msg mb-4">{attachmentError}</p>
            )}
            <p className="tip-para mb-5">
              You may attach upto file under 25MB and file should be of type{' '}
              <strong>zip</strong>. Include work samples or other documents to
              support your application. Do not attach any kind of CV or resume
              in the attachments.
            </p>
          </div>

          <Button
            onClick={proposalSubmitHandler}
            className="btn-primary btn-round btn-submit-proposal px-4 py-3"
          >
            Submit Proposal
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProposalSubmit;
