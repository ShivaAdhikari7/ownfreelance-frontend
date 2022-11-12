import { useState } from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import signUpImg from 'assets/images/sign_up_page_img.jpg';

const Signup = () => {
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  return (
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
          <form>
            <div className="signup-form-controls w-75 m-auto d-flex flex-column">
              <Input
                id="firstName"
                label="First name"
                type="text"
                placeholder="Enter first name"
                name="firstName"
              />

              <Input
                id="lastName"
                label="Last name"
                type="text"
                placeholder="Enter last name"
                name="lastName"
              />

              <Input
                id="email"
                label="Email address"
                type="email"
                placeholder="Enter email address"
                name="email"
              />

              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter Password"
                name="password"
              />

              <Input
                id="confirmPassword"
                label="Confirm password"
                type="password"
                placeholder="Enter your password again"
                name="confirmPassword"
              />

              <Input
                id="country"
                label="Country"
                type="text"
                placeholder="Enter country name"
                name="country"
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
            <a href="/" className="login-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
