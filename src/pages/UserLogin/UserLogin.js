import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import signUpImg from 'assets/images/sign_up_page_img.jpg';

const Login = () => {
  const navigate = useNavigate();
  

  return (
    <>
      <Navbar />
      <div className="container overflow-hidden section-signup ">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div className="signup-form m-5" id='flex-login'>
            <h1 className='page-title m-5' id='text-login'> Login to OwnFreelance!!</h1>
            <form >
              <div className="signup-form-controls w-75 m-auto d-flex flex-column">

                <Input
                  id="email"
                  label="Email address"
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  //onChange={emailChangeHandler}
                />

                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  //onChange={passwordChangeHandler}
                />

              </div>

              
              <div className="form-action text-center">
                <Button
                  className="btn-round btn-submit "
                  type="submit"
                  label="Continue with Email"
                />
              </div>
              <p className='pt-5' id='text-login' >or</p>
              <div className="form-action text-center">
                <Button
                  className="btn-round btn-google "
                  type="submit"
                  label="Continue with Google"
                />
              </div>
              <div className="form-action text-center">
                <Button
                  className="btn-round btn-apple "
                  type="submit"
                  label="Continue with Apple"
                />
              </div>

            </form>

            <div className="login-display text-center d-flex mt-5 justify-content-center">
              <p className="login-text">Don't Have an account?</p>
              <a href="/" className="login-link">
                Register Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  };


export default Login;
