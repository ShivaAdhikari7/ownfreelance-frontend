import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import signUpImg from 'assets/images/sign_up_page_img.jpg';
import Spinner from 'components/Spinner/Spinner';

import PasswordEye from 'components/PasswordEye/PasswordEye';
import AuthContext from 'context/AuthContext/auth-context';

const Signup = () => {
  const navigate = useNavigate();
  const { setToken, setIsLoggedIn } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');

  const [firstNameHasError, setFirstNameHasError] = useState(false);
  const [lastNameHasError, setLastNameHasError] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [confirmPasswordHasError, setConfirmPasswordHasError] = useState(false);
  const [countryHasError, setCountryHasError] = useState(false);
  const [passwordMatchHasError, setPasswordMatchHasError] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const formIsInvalid =
    firstName.trim().length === 0 ||
    lastName.trim().length === 0 ||
    email.trim().length === 0 ||
    password.trim().length === 0 ||
    confirmPassword.trim().length === 0 ||
    country.trim().length === 0 ||
    !isPrivacyChecked ||
    password !== confirmPassword;

  const firstNameChangeHandler = e => {
    setFirstNameHasError(e.target.value.trim().length === 0);
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = e => {
    setLastNameHasError(e.target.value.trim().length === 0);
    setLastName(e.target.value);
  };

  const emailChangeHandler = e => {
    setEmailHasError(e.target.value.trim().length === 0);
    setEmail(e.target.value);
  };

  const passwordChangeHandler = e => {
    setPasswordHasError(e.target.value.trim().length === 0);
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = e => {
    setConfirmPasswordHasError(e.target.value.trim().length === 0);
    setPasswordMatchHasError(e.target.value !== password);
    setConfirmPassword(e.target.value);
  };

  const countryChangeHandler = e => {
    setCountryHasError(e.target.value.trim().length === 0);
    setCountry(e.target.value);
  };

  const formSubmitHandler = async e => {
    e.preventDefault();

    if (firstName.trim().length === 0) {
      setFirstNameHasError(true);
    }

    if (lastName.trim().length === 0) {
      setLastNameHasError(true);
    }

    if (email.trim().length === 0) {
      setEmailHasError(true);
    }

    if (password.trim().length === 0) {
      setPasswordHasError(true);
    }

    if (confirmPassword.trim().length === 0) {
      setConfirmPasswordHasError(true);
    }

    if (password !== confirmPassword) {
      setPasswordMatchHasError(true);
    }

    if (country.trim().length === 0) {
      setCountryHasError(true);
    }

    if (formIsInvalid) return;

    const data = {
      firstName,
      lastName,
      email,
      password,
      country,
    };

    try {
      setIsLoading(true);

      const res = await axios.post('http://localhost:90/user/register', data);

      localStorage.setItem('__token__', res.data.token);
      setToken(res.data.token);
      // setIsLoggedIn(true);

      await axios.post('http://localhost:90/otp/send', null, {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });

      navigate('/otp/verify', { state: { email } });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const passwordVisibilityChangeHandler = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const confirmPasswordVisibilityChangeHandler = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  return (
    <>
      <Navbar />
      <div className="container overflow-hidden section-signup">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div className="signup-content d-flex flex-column align-items-center">
            <img
              className="signup-img"
              src={signUpImg}
              alt="Illustration of girl behind phone"
            />

            <p className="signup-text text-center w-75 m-auto">
              Start freelancing on ownfreelance today!
            </p>
          </div>
          <div className="signup-form">
            <form onSubmit={formSubmitHandler}>
              <div className="signup-form-controls w-75 m-auto d-flex flex-column">
                <div>
                  <Input
                    id="firstName"
                    label="First name"
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    onChange={firstNameChangeHandler}
                  />
                  {firstNameHasError && (
                    <p className="error-msg mt-3">
                      First Name can not be empty.
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    id="lastName"
                    label="Last name"
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    onChange={lastNameChangeHandler}
                  />
                  {lastNameHasError && (
                    <p className="error-msg mt-3">
                      Last Name can not be empty.
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    id="email"
                    label="Email address"
                    type="email"
                    placeholder="Enter email address"
                    name="email"
                    onChange={emailChangeHandler}
                  />
                  {emailHasError && (
                    <p className="error-msg mt-3">Email can not be empty.</p>
                  )}
                </div>

                <div>
                  <Input
                    id="password"
                    label="Password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="Enter Password"
                    name="password"
                    onChange={passwordChangeHandler}
                    autoComplete="on"
                    render={() => (
                      <PasswordEye
                        isPasswordVisible={isPasswordVisible}
                        onClick={passwordVisibilityChangeHandler}
                      />
                    )}
                  />
                  {passwordHasError && (
                    <p className="error-msg mt-3">Password can not be empty.</p>
                  )}
                </div>

                <div>
                  <Input
                    id="confirmPassword"
                    label="Confirm password"
                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                    placeholder="Enter your password again"
                    name="confirmPassword"
                    onChange={confirmPasswordChangeHandler}
                    autoComplete="on"
                    render={() => (
                      <PasswordEye
                        isPasswordVisible={isConfirmPasswordVisible}
                        onClick={confirmPasswordVisibilityChangeHandler}
                      />
                    )}
                  />
                  {confirmPasswordHasError && (
                    <p className="error-msg mt-3">
                      Confirm Password can not be empty.
                    </p>
                  )}
                  {passwordMatchHasError && (
                    <p className="error-msg mt-3">
                      Password and confirm password must be same.
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    id="country"
                    label="Country"
                    type="text"
                    placeholder="Enter country name"
                    name="country"
                    onChange={countryChangeHandler}
                  />
                  {countryHasError && (
                    <p className="error-msg mt-3">
                      Country name can not be empty.
                    </p>
                  )}
                </div>
              </div>

              <div className="privacy-terms-check w-75 m-auto d-flex align-items-start mt-5">
                <input
                  onChange={e => {
                    setIsPrivacyChecked(e.target.checked);
                  }}
                  type="checkbox"
                  id="privacy-check"
                />
                <p className="privacy-term-msg">
                  Yes, I understand and agree to the OwnFreelance's terms of
                  service, including the user agreement and privacy policy .
                </p>
              </div>

              <div className="form-action text-center d-flex align-items-center justify-content-center">
                <Button
                  className={`btn-round btn-submit text-center d-flex align-items-center justify-content-center ${
                    isPrivacyChecked ? '' : 'disabled'
                  }`}
                  type="submit"
                >
                  {isLoading ? <Spinner /> : 'Create my account'}
                </Button>
              </div>
            </form>

            <div className="login-display text-center d-flex mt-5 justify-content-center">
              <p className="login-text">Already have an account?</p>
              <a href="/user/login" className="login-link">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
