import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
import Img from "assets/images/web-development.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import FreelancerRegistrationContext from "context/FreelancerRegistration/freelancer-context";
import testimonials from "assets/images/testimonial-1.jpg";
import Footer from "components/Footer/Footer";

const FreelancerProfile = () => {
  const navigate = useNavigate();

  const [profileDetail, setProfileDetail] = useState(null);
  useEffect(() => {
    const getProfileDetails = async () => {
      const res = await axios.get("http://localhost:90/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("__token__")}`,
        },
      });

      setProfileDetail(res.data.user);
    };

    getProfileDetails();
  }, []);

  const updateProfile = () => {
    navigate("/update/profile");
  };

  return (
    profileDetail && (
      <>
        <Navbar />
        <div className="container  w-75 overflow-hidden main-page border border-$grey2-100 rounded p -5">
          <div className="search-title align-items-center ">
            <h1 className="page-title mt-5 ms-4">
              Better market your expertise with specialized profiles
            </h1>
            <p className="profile-description mt-5 ms-4 me-5">
              Specialized profiles allow you to display more specific skills,
              deliverables, and more – and help power better search results and
              job recommendations. Learn more
            </p>
            <div className="form-action text-center m-5">
              <Button
                type="button"
                className="btn-round me-5 btn-submit p -3 w-50 align-items-right justify-items-right"
              >
                {" "}
                Create a Specialized Profile{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden main-page w-75 d-flex flex-column align-items-center border border-$grey2-100 rounded ">
          <div className="d-flex flex-row mt-5  border-bottom  border-$grey2-100 rounded  pb-5">
            <div className="d-flex flex-row w-50 ms-5  ">
              <img
                src={profileDetail.profilePictureUrl}
                alt="dp"
                className="rounded-circle me-5 "
                id="profile-circle"
              />
              <div className="mt-4 pt-5 pe-5">
                <h1>
                  {profileDetail?.userId.firstName}{" "}
                  {profileDetail?.userId.lastName}{" "}
                </h1>
                <p className="profile-description">
                  {profileDetail?.userId.email}
                </p>
                <p className="profile-description">{` ${profileDetail?.userId.country}`}</p>
                <p className="profile-description">
                  {profileDetail?.preferences.phoneNumber}
                </p>
              </div>
            </div>
            <div className="form-action text-center m-5 pt-5 ps-5">
              <Button
                type="button"
                className="btn-round me-5 btn-submit p -3 w-100 "
              >
                {" "}
                Public View{" "}
              </Button>
            </div>
            <div className="form-action text-center m-5 pt-5">
              <Button
                type="button"
                className="btn-round btn-submit p -3 w-100"
                onClick={updateProfile}
              >
                {" "}
                Profile Settings{" "}
              </Button>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="border-left border-dark ms-5 rounded ">
              <h2 className="mb-3">
                Rate per hour <TbEdit className="heart-icon" />
              </h2>
              <p className="profile-description">
                {" "}
                {profileDetail?.hourlyRate}$ per hour{" "}
              </p>

              <h2 className="mb-3 mt-5">
                Languages <IoMdAddCircleOutline className="heart-icon" />{" "}
                <TbEdit className="heart-icon" />
              </h2>
              <p className="profile-description">
                {profileDetail?.preferences.language}{" "}
              </p>
              <h2 className="mb-3 mt-5">
                Education <IoMdAddCircleOutline className="heart-icon" />{" "}
              </h2>
              <h4 className="profile-description">
                {" "}
                {profileDetail?.educationDetails[0].schoolName}
              </h4>
              <p className="profile-description">
                {profileDetail?.educationDetails[0].degree}
              </p>
              <p className="profile-description">
                {profileDetail?.educationDetails[0].studyField}
              </p>
              <h6 className="mb-5">
                {profileDetail?.educationDetails[0].attendedDate} to{" "}
                {profileDetail?.educationDetails[0].endDate}{" "}
              </h6>
            </div>
            <div className="me-5 ms-5 ps-5 border-right border-success  ">
              <h1>{profileDetail.jobTitle}</h1>
              <p className="profile-description">{profileDetail?.bio}</p>
              <div className="border-bottom  border-$grey2-100 rounded"></div>
              <h1 className="mt-5 mb-3 ">Work history </h1>
              <h4 className="profile-description">
                {profileDetail?.workExperiences[0].workTitle} |{" "}
                {profileDetail?.workExperiences[0].companyName} |{" "}
                {profileDetail?.workExperiences[0].companyCity} |{" "}
                {profileDetail?.workExperiences[0].companyCountry}
              </h4>
              <h6 className="profile-description">
                {profileDetail?.workExperiences[0].workStartDate} -{" "}
                {profileDetail?.workExperiences[0].workEndDate}
              </h6>

              <div className="border-bottom  border-$grey2-100 rounded"></div>

              <h1 className="mt-5">
                Skills <IoMdAddCircleOutline className="heart-icon" />{" "}
              </h1>
              <p className="profile-description">{profileDetail?.skills}</p>
              {/* <h4>{profileDetail.map(skill => (
                <div className="col">
                  <span
                    className="skill w-100 text-center d-inline-block p-3"
                    key={skill.id}
                  >
                    {skill.label}
                  </span>
                </div>
              ))} */}
              {/* </h4> */}
              <div className="border-bottom  border-$grey2-100  w-100 rounded"></div>

              <h1 className="mt-5">Your project catalog</h1>
              <p className="mb-5 profile-description">
                Projects are a new way to earn on Upwork that helps you do more
                of the work you love to do.<br></br> Create project offerings
                that highlight your strengths and attract more clients.
              </p>
            </div>
          </div>
        </div>

        <div className="container w-75 overflow-hidden main-page  d-flex flex-column align-items-left text-end border border-$grey2-100 rounded p -5">
          <div className="search-title d-flex align-items-center ">
            <h1 href="#" className="search-link ms-3 me-5">
              Testimonials
              <TbEdit className="heart-icon ms-5" />
            </h1>
            {/* <img src={testimonials} alt="img"/> */}
          </div>
        </div>
        <br></br>
        {/* <Footer className="mt-5"/> */}
      </>
    )
  );
};
export default FreelancerProfile;
