import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FiDollarSign } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { BiBrain } from 'react-icons/bi';
import { MdAttachFile } from 'react-icons/md';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import SuccessToaster from 'components/Toaster/SuccessToaster';
import { downloadFile } from 'utils/downloadFile';

const ProposalSubmitSuccess = () => {
  const {
    state: {
      jobDetail,
      coverLetter,
      hourlyRate,
      attachmentFile,
      attachedFileUrl,
    },
  } = useLocation();

  const [isToasterVisible, setIsToasterVisible] = useState(true);

  const closeToaster = () => {
    setIsToasterVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 submit-proposal">
        <SuccessToaster
          onClose={closeToaster}
          isVisible={isToasterVisible}
          toastText="You have successfully submitted the proposal."
        />
        <h2 className="heading mb-5">Proposal Details</h2>

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
          <h3 className="mb-5">Your proposed terms</h3>

          <div className="hourly-rate-detail terms-detail pb-4 mb-4">
            <strong className="mb-2 d-block">Hourly Rate</strong>
            <p>Total amount the client will see on your proposal</p>

            <span>${hourlyRate}/hr</span>
          </div>

          <div className="terms-detail">
            <strong className="d-block mb-2">You'll Receive</strong>
            <p>The estimated amount you'll receive after service fees</p>

            <span>${+hourlyRate - 0.2 * +hourlyRate}/hr</span>
          </div>
        </div>

        <div className="submit-cover-letter px-5 py-4 mb-5 w-100">
          <h4 className="mb-5 impression-heading">Cover Letter</h4>
          <p className="mb-4">{coverLetter}</p>
          <div className="attachment">
            <MdAttachFile />{' '}
            <span
              role="button"
              className="cursor-pointer"
              onClick={downloadFile.bind(
                null,
                attachedFileUrl,
                attachmentFile.name
              )}
            >
              {attachmentFile.name}
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProposalSubmitSuccess;
