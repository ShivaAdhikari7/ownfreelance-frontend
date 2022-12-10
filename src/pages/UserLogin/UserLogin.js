import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const CustomerLogin = async e => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    try {
      const loginResponse = await axios.post(
        'http://localhost:90/user/login',
        data
      );

      localStorage.setItem('__token__', loginResponse.data.token);

      const res = await axios.get('http://localhost:90/user/me', {
        headers: { Authorization: `Bearer ${loginResponse.data.token}` },
      });

      localStorage.setItem('userType', res.data.user.userType);

      navigate('/dashboard');
    } catch (err) {
      setErrorMessage('Invalid credentials');
    }
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
              <h1 className="page-title">Login to OwnFreelance!!</h1>
              {errorMessage && <p className="error-msg">{errorMessage}</p>}
            </div>

            <form className="signup-form-controls w-100 d-flex flex-column">
              <Input
                id="email"
                label="Email address"
                type="email"
                placeholder="Enter email address"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />

              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />

              <div className="form-action text-center">
                <Button
                  className="btn-round btn-submit w-100"
                  type="submit"
                  onClick={CustomerLogin}
                >
                  Continue with Email
                </Button>
              </div>
              <p className="pt-5" id="text-login">
                or
              </p>
              <div className="form-action text-center">
                <Button
                  className="btn-round btn-google p-3 w-100"
                  type="submit"
                >
                  Continue With Google
                </Button>
              </div>
              <div className="form-action text-center">
                <Button className="btn-round btn-apple p-3 w-100" type="submit">
                  Continue With Apple
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
