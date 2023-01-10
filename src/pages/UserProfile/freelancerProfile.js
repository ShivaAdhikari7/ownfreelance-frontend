import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdEmail, MdPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import AuthContext from "context/AuthContext/auth-context";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FreelancerProfile = () => {
  const { user, userType } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [hourlyRate, setrate] = useState("");
  const [language, setlanguage] = useState("");

  const navigate = useNavigate();
  const [profileDetail, setProfileDetail] = useState(null);
  const [FreelancerDetail, setFreelancerDetail] = useState(null);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("__token__"),
    },
  };
  console.log(user._id, userType);
  useEffect(() => {
    const getProfileDetails = async () => {
      const res = await axios.get("http://localhost:90/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("__token__")}`,
        },
      });

      setProfileDetail(res.data.user);
      setrate(res.data.user.hourlyRate);
      console.log(res.data.user);
    };

    getProfileDetails();
  }, []);

  // useEffect(() => {
  //   const getFreelancerDetails = async () => {
  //     const res = await axios.get("http://localhost:90/freelancer/", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('__token__')}`,
  //       },
  //     }
  //     );

  //     setFreelancerDetail(res.data);
  //     console.log(res);
  //     setrate(res.data.hourlyRate);

  //   };

  //   getFreelancerDetails();
  // }, []);

  const updateProfile = (e) => {
    e.preventDefault();
    const data = {
      hourlyRate: hourlyRate,
      language: language,
    };
    axios
      .put(
        `http://localhost:90/${
          userType === "Freelancer" ? "freelancer" : "client"
        }/update/${user._id}`,
        data,
        config
      )
      .then((result) => {
        var dialog = window.confirm(
          "Are you sure you want to update these data?"
        );
        if (dialog) {
          console.log("Freelancer profile updated");
        } else {
          console.log("Please try again!");
        }
        console.log(result);
        setrate(result.data.hourlyRate);
        setlanguage(result.data.preferences.language);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateUser = () => {
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
                  <MdEmail /> {profileDetail?.userId.email}
                </p>
                <p className="profile-description">
                  <GoLocation /> {` ${profileDetail?.userId.country}`}
                </p>
                <p className="profile-description">
                  <MdPhone />
                  {profileDetail?.preferences.phoneNumber}
                </p>
              </div>
            </div>
            <div className="form-action text-center m-5 pt-5 ps-5">
              <Button
                type="button"
                className="btn-round me-3 ms-5 btn-submit p -3 w-100 "
              >
                {" "}
                Public View{" "}
              </Button>
            </div>
            <div className="form-action text-center m-5 pt-5">
              <Button
                type="submit"
                className="btn-round btn-submit p -3 w-100"
                onClick={updateUser}
              >
                {" "}
                Profile Settings{" "}
              </Button>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="border-left border-dark ms-5 rounded ">
              <h2 className="mb-3">
                Rate per hour{" "}
                <button
                  onClick={() => setModal(true)}
                  className="border rounded-circle"
                >
                  <MdEdit className="heart-icon" />
                </button>
              </h2>
              <Modal
                isOpen={modal}
                toggle={() => setModal(!modal)}
                className="modal-dialog modal-lg modal-dialog-centered"
              >
                <ModalHeader toggle={() => setModal(!modal)}>
                  <h1>Rate</h1>
                </ModalHeader>
                <ModalBody className="m-5">
                  <label className=" fs-4 mb-3">
                    Knowing how much you can work helps Ownfreelance find the
                    right jobs for you.
                  </label>
                  <h5>I can currently work at:</h5>
                  <input
                    type="text"
                    className="form-control profile-description mt-4"
                    value={hourlyRate}
                    onChange={(e) => {
                      setrate(e.target.value);
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <button
                    className="m-5 font-lg profile-description p-3 border rounded-pill btn btn-success"
                    onClick={updateProfile}
                  >
                    {" "}
                    Update
                  </button>
                </ModalFooter>
              </Modal>
              <p className="profile-description">
                {" "}
                {profileDetail?.hourlyRate}$ per hour{" "}
              </p>
              <h2 className="mb-3">
                Languages{" "}
                <button
                  onClick={() => setModal1(true)}
                  className="border rounded-circle"
                >
                  <MdEdit className="heart-icon" />
                </button>
              </h2>
              <Modal
                isOpen={modal1}
                toggle={() => setModal1(!modal1)}
                className="modal-dialog modal-lg modal-dialog-centered"
              >
                <ModalHeader toggle={() => setModal1(!modal1)}>
                  <h1>Languages</h1>
                </ModalHeader>
                <ModalBody className="m-5">
                  <input
                    type="text"
                    className="form-control profile-description mt-4"
                    value={language}
                    onChange={(e) => {
                      setlanguage(e.target.value);
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <button
                    className="m-5 font-lg profile-description p-3 border rounded-pill btn btn-success"
                    onClick={updateProfile}
                  >
                    {" "}
                    Update
                  </button>
                </ModalFooter>
              </Modal>
              <p className="profile-description">
                {profileDetail?.preferences.language}{" "}
              </p>
              <h2 className="mb-3 mt-5">
                Education{" "}
                <button
                  onClick={() => setModal2(true)}
                  className="border rounded-circle"
                >
                  <MdEdit className="heart-icon" />
                </button>
              </h2>
              <Modal
                isOpen={modal2}
                toggle={() => setModal2(!modal2)}
                className="modal-dialog modal-lg modal-dialog-centered"
              >
                <ModalHeader toggle={() => setModal2(!modal2)}>
                  <h1>Education</h1>
                </ModalHeader>
                <ModalBody className="m-5 w-75">
                  <label className="mt-4 profile-description">
                    School Name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2 profile-description"
                  />
                  <label className="mt-4 profile-description">Degree</label>
                  <input
                    type="text"
                    className="form-control mt-2 profile-description"
                  />
                  <label className="mt-4 profile-description">Field</label>
                  <input
                    type="text"
                    className="form-control mt-2 profile-description"
                  />
                </ModalBody>
                <ModalFooter>
                  <button
                    className="m-5 font-lg profile-description p-3 border rounded-pill btn btn-success"
                    onClick={updateProfile}
                  >
                    {" "}
                    Update
                  </button>
                </ModalFooter>
              </Modal>
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
              <h5 className="mb-5">
                {profileDetail?.educationDetails[0].attendedDate} to{" "}
                {profileDetail?.educationDetails[0].endDate}{" "}
              </h5>
            </div>
            <div className="me-5 ms-5 ps-5 border-right border-success  ">
              <h1>{profileDetail.jobTitle}</h1>
              <p className="profile-description">{profileDetail?.bio}</p>
              <div className="border-bottom  border-$grey2-100 rounded"></div>
              <h1 className="mt-5 mb-3 ">Work history </h1>
              <h4 className="profile-description">
                {profileDetail?.workExperiences[0].workTitle}
              </h4>
              <h4 className="profile-description">
                {profileDetail?.workExperiences[0].companyName}
              </h4>
              <h4 className="profile-description">
                {profileDetail?.workExperiences[0].companyCity}{" "}
                {profileDetail?.workExperiences[0].companyCountry}
              </h4>
              <h6 className="profile-description">
                from: {profileDetail?.workExperiences[0].workStartDate}{" "}
                <br></br> To: {profileDetail?.workExperiences[0].workEndDate}
              </h6>
              <div className="border-bottom  border-$grey2-100 rounded"></div>
              <h1 className="mt-5">
                Skills{" "}
                <button>
                  <MdEdit className="heart-icon  border  border-$primary-tint-1 rounded-circle" />
                </button>{" "}
              </h1>
              <div className="d-flex align-items-center skills-container">
                {profileDetail.skills.map((skill) => (
                  <span key={skill.id}>{skill.label}</span>
                ))}
              </div>
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
              <MdEdit className="heart-icon ms-5" />
            </h1>
            {/* <img src={testimonials} alt="img"/> */}
          </div>
        </div>
        <br></br>
      </>
    )
  );
};
export default FreelancerProfile;
