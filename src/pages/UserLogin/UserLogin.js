import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "components/Navbar/Navbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

import appleLogo from "assets/images/apple-logo.png";
import googleLogo from "assets/images/google-logo.png";

import AuthContext from "context/AuthContext/auth-context";
import PasswordEye from "components/PasswordEye/PasswordEye";

import Spinner from "components/Spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser, setUserType, setToken } =
    useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formIsInvalid =
    email.trim().length === 0 || password.trim().length === 0;

  const CustomerLogin = async (e) => {
    e.preventDefault();

    if (email.trim().length === 0) setEmailHasError(true);
    if (password.trim().length === 0) setPasswordHasError(true);

    if (formIsInvalid) return;

    const data = {
      email: email,
      password: password,
    };
    try {
      setIsLoading(true);

      const loginResponse = await axios.post(
        "http://localhost:90/user/login",
        data
      );

      localStorage.setItem("__token__", loginResponse.data.token);

      const res = await axios.get("http://localhost:90/user/me", {
        headers: { Authorization: `Bearer ${loginResponse.data.token}` },
      });

      localStorage.setItem("userType", res.data.user.userType);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      setIsLoggedIn(true);
      setUserType(res.data.user.userType);
      setToken(loginResponse.data.token);
      setIsLoading(false);

      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setErrorMessage("Invalid credentials");
    }
  };

  const passwordVisibilityChangeHandler = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <div className="container overflow-hidden section-signup ">
        <div className="row row-cols-1 row-cols-md-1 gx-5 gy-5">
          <div
            className="login-form mt-5 align-items-center m-auto p-5"
            id="flex-login"
          >
            <div>
              <h2 className="heading-secondary mb-5 page-title">
                Login to OwnFreelance
              </h2>
              {errorMessage && <p className="error-msg">{errorMessage}</p>}
            </div>

            <form className="signup-form-controls w-100 d-flex flex-column">
              <div>
                <Input
                  id="email"
                  label="Email address"
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e) => {
                    setEmailHasError(e.target.value.trim().length === 0);
                    setEmail(e.target.value);
                  }}
                />
                {emailHasError && (
                  <p className="error-msg m-0">Email can not be empty.</p>
                )}
              </div>

              <div>
                <Input
                  id="password"
                  label="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => {
                    setPasswordHasError(e.target.value.trim().length === 0);
                    setPassword(e.target.value);
                  }}
                  render={() => (
                    <PasswordEye
                      isPasswordVisible={isPasswordVisible}
                      onClick={passwordVisibilityChangeHandler}
                    />
                  )}
                />
                {passwordHasError && (
                  <p className="error-msg m-0">Password can not be empty.</p>
                )}
              </div>

              <div className="form-action text-center">
                <Button
                  className="btn-round btn-submit w-100 d-flex align-items-center justify-content-center"
                  type="submit"
                  onClick={CustomerLogin}
                >
                  {isLoading ? <Spinner /> : "Continue with email"}
                </Button>
              </div>
              <div className="login-option-separator d-flex align-items-center justify-content-center my-3">
                <span className="line w-25"></span>
                <span className="separator-text">OR</span>
                <span className="line w-25"></span>
              </div>
              <div className="form-action text-center">
                <Button
                  className="d-flex align-items-center justify-content-between btn-round btn-google p-3 w-100"
                  type="submit"
                >
                  <img src={googleLogo} alt="Google logo" />
                  Continue With Google
                  <span></span>
                </Button>
              </div>
              <div className="form-action text-center">
                <Button
                  className="d-flex align-items-center justify-content-between btn-round btn-apple p-3 w-100"
                  type="submit"
                >
                  <img src={appleLogo} alt="Apple logo" />
                  Continue With Apple
                  <span></span>
                </Button>
              </div>
            </form>

            <div className="login-display text-center d-flex mt-5 justify-content-center">
              <p className="login-text">Don't Have an account?</p>
              <NavLink to="/signup" className="login-link">
                Register Here
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
