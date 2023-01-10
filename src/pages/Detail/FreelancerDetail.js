import Navbar from 'components/Navbar/Navbar';
import Button from 'components/Button/Button';
import Footer from 'components/Footer/Footer';

import { AiOutlineHeart } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { MdStar } from 'react-icons/md';

const FreelancerDetail = ({ freelancerDetail, render }) => {
  return (
    <>
      <Navbar />
      <div className="container w-75 freelancer-detail-section p-5 my-5">
        <div className="row">
          <div className="col-12 intro-section">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle me-4 freelancer-profile-img"
                  src={freelancerDetail.profilePictureUrl}
                  alt={`${freelancerDetail.userId?.firstName} ${freelancerDetail.userId.lastName}`}
                />

                <div>
                  <h1 className="freelancer-name mb-2">
                    {freelancerDetail.userId.firstName}{' '}
                    {freelancerDetail.userId.lastName}
                  </h1>
                  <span className="location-detail">
                    <MdLocationOn className="me-2" />
                    {freelancerDetail.userId.country}
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <Button className="btn-hire btn-round btn-primary me-4 px-4">
                  Hire Freelancer
                </Button>
                <AiOutlineHeart className="heart-icon" />
              </div>
            </div>
          </div>
          {render && render()}
          <div className="row">
            <div className="col-4 left-sidebar">
              <div className="d-flex flex-column stats-section mb-5 pb-4 border-bottom">
                <h4 className="mb-4">Stats</h4>
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-column me-5">
                    <strong className="mb-1">$14K+</strong>
                    <span>Earnings</span>
                  </div>

                  <div className="d-flex flex-column">
                    <strong className="mb-1">4</strong>
                    <span>Total Jobs</span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column language-section pb-4 border-bottom mb-5">
                <h4 className="mb-3">Language</h4>
                <span>{freelancerDetail.preferences.language}</span>
              </div>

              <div className="d-flex flex-column education-section pb-4">
                <h4 className="mb-4">Education</h4>

                <h5 className="mb-2">
                  {freelancerDetail.educationDetails[0].schoolName}
                </h5>
                <span className="mb-2">
                  {freelancerDetail.educationDetails[0].degree}
                </span>
                <span>
                  {new Date(
                    freelancerDetail.educationDetails[0].attendedDate
                  ).getFullYear()}{' '}
                  -{' '}
                  {new Date(
                    freelancerDetail.educationDetails[0].endDate
                  ).getFullYear()}
                </span>
              </div>
            </div>
            <div className="col-8 job-description px-5 py-3">
              <div className="d-flex align-items-center justify-content-between mb-5">
                <h2 className="job-title m-0 me-3">
                  {freelancerDetail.jobTitle}
                </h2>
                <strong className="job-rate">
                  ${freelancerDetail.hourlyRate.toFixed(2)}/hr
                </strong>
              </div>

              <p className="mb-5 bio pb-4">{freelancerDetail.bio}</p>

              <div className="mb-5">
                <h4 className="mb-3">Work History</h4>
                <div className="work-history-container d-flex flex-column">
                  {freelancerDetail.workHistory ? (
                    ''
                  ) : (
                    <p className="pb-3">No work histories.</p>
                  )}
                  {/* <div className="work-history py-4">
                    <h5 className="mb-3">
                      Build responsive website for HR tool using ReactJS
                    </h5>

                    <div className="project-detail">
                      <div className="d-flex align-items-center mb-4">
                        <div className="rating-container me-2">
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                        </div>

                        <span>Mar 26, 2021 - Jun 4, 2022</span>
                      </div>

                      <p className="testimonial">
                        "Dikshak is an outstanding engineer and partner. He
                        displayed exceptional communication and technical skills
                        throughout our engagement. I highly recommend him."
                      </p>
                    </div>
                  </div>

                  <div className="work-history py-4">
                    <h5 className="mb-3">
                      Build responsive website for HR tool using ReactJS
                    </h5>

                    <div className="project-detail">
                      <div className="d-flex align-items-center mb-4">
                        <div className="rating-container me-2">
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                          <MdStar className="icon-star" />
                        </div>

                        <span>Mar 26, 2021 - Jun 4, 2022</span>
                      </div>

                      <p className="testimonial">
                        "Dikshak is an outstanding engineer and partner. He
                        displayed exceptional communication and technical skills
                        throughout our engagement. I highly recommend him."
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              <div>
                <h4 className="mb-4">Skills</h4>
                <div className="d-flex align-items-center skills-container">
                  {freelancerDetail.skills.map(skill => (
                    <span key={skill.id}>{skill.label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-75 p-5 mb-5 freelancer-employment-section">
        <h3 className="mb-5">Employment History</h3>
        <div className="d-flex flex-column employment-histories">
          {freelancerDetail.workExperiences.map(workExperience => {
            const startMonth = new Date(
              workExperience.workStartDate
            ).toLocaleString('default', { month: 'long' });

            const startYear = new Date(
              workExperience.workStartDate
            ).getFullYear();

            const endMonth = new Date(
              workExperience.workEndDate
            ).toLocaleString('default', { month: 'long' });

            const endYear = new Date(workExperience.workEndDate).getFullYear();

            return (
              <div
                key={`${workExperience.workStartDate}${workExperience.workEndDate}`}
                className="employment-history"
              >
                <div>
                  <h4 className="mb-2">
                    {workExperience.workTitle} | {workExperience.companyName}
                  </h4>
                  <div className="d-flex flex-column mb-4">
                    <span className="location mb-2">
                      <MdLocationOn className="me-2" />
                      {workExperience.companyCity},{' '}
                      {workExperience.companyCountry}
                    </span>
                    <span className="date">
                      {startMonth} {startYear} - {endMonth} {endYear}
                    </span>
                  </div>

                  <p className="w-75 pb-3">{workExperience.workDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreelancerDetail;
