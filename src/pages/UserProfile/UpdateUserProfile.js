import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signUpImg from "assets/images/update-profile.png";
import Navbar from "components/Navbar/Navbar";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [profileDetail, setProfileDetail] = useState(null);

  const [message, setMessage] = useState("");
  const [user, setUserdata] = useState("");
  const [firstName, setFn] = useState("");
  const [lastName, setLn] = useState("");
  const [email, setemail] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("__token__"),
    },
  };
  const updateProfile = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    axios
      .put("http://localhost:90/user/update", data, config)
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("__token__"),
      },
    };

    axios
      .get("http://localhost:90/user/me", config)
      .then((result) => {
        setUserdata(result.data);
        setFn(result.data.user.userId.firstName);
        setLn(result.data.user.userId.lastName);
        setemail(result.data.user.userId.email);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container center w-75" id="profile">
        <div className="row center ">
          <div className="d-flex flex-row">
            <div className="col-md-4 " id="profile1">
              <h2 className="profile-title">Update Profile:</h2>
              <p>{message}</p>
              <form>
                <div className="form-group">
                  <label className="profile-description mt-4">
                    First name:
                  </label>
                  <input
                    type="text"
                    className="form-control profile-description p-2"
                    value={firstName}
                    onChange={(e) => {
                      setFn(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="profile-description mt-4">Last name:</label>
                  <input
                    type="text"
                    className="form-control profile-description p-2"
                    value={lastName}
                    onChange={(e) => {
                      setLn(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label className="profile-description mt-4">Email:</label>
                  <input
                    type="email"
                    className="form-control profile-description p-2"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="m-5 font-lg profile-description pe-5 ps-5 pt-3 pb-3 border rounded-pill btn btn-success"
                  onClick={updateProfile}
                >
                  {" "}
                  Update
                </button>
              </form>
            </div>
            <div>
              <div className="signup-content d-flex flex-column m-5 align-items-center">
                <img
                  className="signup-img"
                  id="img"
                  src={signUpImg}
                  alt="Illustration of girl behind phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
