import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Button from "components/Button/Button";

import { FiDollarSign, FiHeart } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { BiBrain } from "react-icons/bi";

const JobDetail = ({ jobDetail }) => {
  return jobDetail ? (
    <>
      <Navbar />

      <div className="container w-75 p-5 my-5 job-detail-section">
        <div className="row">
          <div className="col-9 job-section px-5">
            <h1 className="job-title mb-5">{jobDetail.headline}</h1>

            <p className="job-description mb-5 pb-4">{jobDetail.description}</p>

            <div className="job-scope-container d-flex align-items-center mb-5 pb-4">
              <div className="d-flex job-scope">
                <FiDollarSign className="job-scope-icon" />
                <div className="d-flex flex-column">
                  <strong className="mb-1">{jobDetail.hourlyRate}/hr</strong>
                  <span>Project Rate</span>
                </div>
              </div>
              <div className="d-flex job-scope">
                <FiCalendar className="job-scope-icon" />
                <div className="d-flex flex-column">
                  <strong className="mb-1">
                    {jobDetail.scope.projectDuration}
                  </strong>
                  <span>Project Length</span>
                </div>
              </div>
              <div className="d-flex job-scope">
                <BiBrain className="brain-icon" />
                <div className="d-flex flex-column">
                  <strong className="mb-1">
                    {jobDetail.scope.projectSize}
                  </strong>
                  <span>Project Level</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Skills</h4>
              <div className="d-flex align-items-center skills-container">
                {jobDetail.skills.map((skill) => (
                  <span key={skill.id}>{skill.label}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-3 client-actions d-flex flex-column align-items-center">
            <Button className="btn-primary btn-round btn-apply p-3">
              Apply Now
            </Button>
            <Button className="d-flex align-items-center justify-content-center btn-round btn-save p-3">
              <FiHeart /> Save Job
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : null;
};

export default JobDetail;
