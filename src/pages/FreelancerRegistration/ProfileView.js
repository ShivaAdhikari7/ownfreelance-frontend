import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from 'components/Navbar/Navbar';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

import profileCompleteImg from 'assets/images/profile_complete.png';

const ProfileView = () => {
  const [profileDetail, setProfileDetail] = useState({});

  const freelancerCtx = useContext(FreelancerRegistrationContext);
  const {
    profileUrl,
    bio,
    educationQualifications,
    hourlyRate,
    title,
    skills,
    workExperiences,
  } = freelancerCtx;

  useEffect(() => {
    const getProfileDetails = async () => {
      const res = await axios.get('http://localhost:90/user/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('__token__')}`,
        },
      });

      setProfileDetail(res.data[0]);
    };

    getProfileDetails();
  });

  const submitProfile = () => {
    console.log(skills);
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 profile-view-section d-flex flex-column">
        <div className="preview-section">
          <h3 className="profile-view-heading">Preview Profile</h3>
          <div className="d-flex align-items-center justify-content-between px-4 py-2">
            <div className="preview-description">
              <p className="preview-user-greet">
                Looking good, {profileDetail?.firstName}
              </p>
              <p className="preview-user-msg">
                You can preview your profile here.
              </p>
              <button
                onClick={submitProfile}
                className="btn btn-success btn-profile-submit py-3"
              >
                Submit my profile
              </button>
            </div>
            <div className="preview-image">
              <img src={profileCompleteImg} alt="freelancer-profile-pic" />
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h3 className="profile-view-heading">Personal Details</h3>
          <div className="personal-detail d-flex align-items-center mb-2 p-4">
            <div className="profile-image d-flex align-items-center justify-content-center">
              <img src={profileUrl} alt="profile_picture" />
            </div>
            <div className="profile-detail">
              <h3 className="user-name">{`${profileDetail?.firstName} ${profileDetail?.lastName}`}</h3>
              <p className="user-location">{`Kathmandu, ${profileDetail?.country}`}</p>
            </div>
          </div>
          <div className="profession-detail p-4">
            <h3 className="profession-title mb-3">{title}</h3>
            <div className="profession-description mb-5">{bio}</div>
            <div className="freelance-rate">${(+hourlyRate).toFixed(2)}/hr</div>
          </div>
        </div>
        <div className="preview-section">
          <h3 className="profile-view-heading">Skills</h3>
          <div className="skills-container p-4 row row-cols-3 align-items-center gx-5 gy-4">
            {skills.map(skill => (
              <div className="col">
                <span
                  className="skill w-100 text-center d-inline-block p-3"
                  key={skill.id}
                >
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="preview-section">
          <h3 className="profile-view-heading">Work Experience</h3>
          <div className="work-details p-4">
            <h4 className="work-detail mb-2">
              {workExperiences[0]?.workTitle} |{' '}
              <span className="work-office">
                {workExperiences[0]?.companyName}
              </span>
            </h4>

            <p className="work-duration mb-5">
              <span className="start-date">
                {new Date(workExperiences[0]?.workStartDate).getFullYear()}
              </span>
              -
              <span className="end-date">
                {new Date(workExperiences[0]?.workEndDate).getFullYear()}
              </span>
            </p>

            <p className="work-description">
              {workExperiences[0]?.workDescription}
            </p>
          </div>
        </div>
        <div className="preview-section">
          <h3 className="profile-view-heading">Education History</h3>
          <div className="education-details p-4">
            <h4 className="college-name mb-2">
              {educationQualifications[0]?.schoolName}
            </h4>
            <p className="field-type mb-5">
              {educationQualifications[0]?.degree} |{' '}
              {educationQualifications[0]?.studyField}
            </p>
            <p className="education-description">
              {educationQualifications[0]?.schoolDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
