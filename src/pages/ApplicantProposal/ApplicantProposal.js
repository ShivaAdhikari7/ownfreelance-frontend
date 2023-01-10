import { useLocation } from 'react-router-dom';

import FreelancerDetail from 'pages/Detail/FreelancerDetail';
import Button from 'components/Button/Button';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { MdAttachFile } from 'react-icons/md';
import { downloadFile } from 'utils/downloadFile';

import AuthContext from 'context/AuthContext/auth-context';

const ApplicantProposal = () => {
  const {
    state: { id },
  } = useLocation();

  const { token } = useContext(AuthContext);

  const [applicantDetail, setApplicantDetail] = useState({});
  const [proposalDetail, setProposalDetail] = useState({});

  useEffect(() => {
    const getProposalData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:90/proposal/applicant/detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const updateRes = await axios.put(
          `http://localhost:90/proposal/update/${id}`,
          { read: true },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProposalDetail(res.data.proposalData);
        setApplicantDetail({
          ...res.data.freelancerDetail.freelancerData,
          userId: res.data.freelancerDetail.userId,
        });
      } catch (err) {
        console.error(err);
      }
    };

    getProposalData();
  }, [id, token]);

  const render = () => {
    return (
      <div className="row mb-5 proposal-section pb-3">
        <div className="col-4 applicant-info">
          <h4 className="mb-3">Applicant</h4>
          <p className="applicant-info-para">
            {applicantDetail.userId.firstName} has applied for the job you have
            posted to
            <i> Build Responsive Website using HTML and CSS</i>. Check his
            specialities and hire if he meets your requirement.
          </p>
        </div>
        <div className="col-8 mb-5 applicant-proposal px-5 py-3">
          <div className="d-flex align-items-center justify-content-between mb-5">
            <h2>Proposal Details</h2>
            <div className="d-flex flex-column gap-1 align-items-center proposed-bid">
              <strong>${proposalDetail.bidRate}/hr</strong>
              <span>Proposed Bid</span>
            </div>
          </div>

          <h4 className="mb-4">Cover Letter</h4>
          <p className="proposal-text mb-5">{proposalDetail.coverLetter}</p>

          <div className="attachment mb-5">
            <MdAttachFile />{' '}
            <span
              role="button"
              className="cursor-pointer"
              onClick={downloadFile.bind(
                null,
                proposalDetail.attachedFileUrl,
                proposalDetail.attachmentName
              )}
            >
              {proposalDetail.attachmentName}
            </span>
          </div>

          <Button className="btn-primary btn-message px-4 py-2">
            Message {applicantDetail.userId.firstName}
          </Button>
        </div>
      </div>
    );
  };

  return (
    Object.keys(applicantDetail).length &&
    Object.keys(proposalDetail).length && (
      <FreelancerDetail freelancerDetail={applicantDetail} render={render} />
    )
  );
};

export default ApplicantProposal;
