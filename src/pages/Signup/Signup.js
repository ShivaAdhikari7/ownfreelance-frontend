import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import signUpImg from 'assets/images/sign_up_page_img.jpg';

const Signup = () => {
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');

  const firstNameChangeHandler = e => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = e => {
    setLastName(e.target.value);
  };
  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  };
  const confirmPasswordChangeHandler = e => {
    setConfirmPassword(e.target.value);
  };
  const countryChangeHandler = e => {
    setCountry(e.target.value);
  };

  const formSubmitHandler = async e => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    const data = {
      firstName,
      lastName,
      email,
      password,
      country,
    };

    const res = await axios.post('http://localhost:90/user/register', data);
    localStorage.setItem('__token__', res.data.token);

    await axios.post('http://localhost:90/otp/send', null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('__token__')}`,
      },
    });

    navigate('/otp/verify', { state: { email } });
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
                <Input
                  id="firstName"
                  label="First name"
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  onChange={firstNameChangeHandler}
                />

                <Input
                  id="lastName"
                  label="Last name"
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  onChange={lastNameChangeHandler}
                />

                <Input
                  id="email"
                  label="Email address"
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  onChange={emailChangeHandler}
                />

                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={passwordChangeHandler}
                />

                <Input
                  id="confirmPassword"
                  label="Confirm password"
                  type="password"
                  placeholder="Enter your password again"
                  name="confirmPassword"
                  onChange={confirmPasswordChangeHandler}
                />

                <Input
                  id="country"
                  label="Country"
                  type="text"
                  placeholder="Enter country name"
                  name="country"
                  onChange={countryChangeHandler}
                />
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

              <div className="form-action text-center">
                <Button
                  className={`btn-round btn-submit ${
                    isPrivacyChecked ? '' : 'disabled'
                  }`}
                  type="submit"
                  label="Create my account"
                />
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
