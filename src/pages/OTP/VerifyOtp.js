import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Navbar from 'components/Navbar/Navbar';
import axios from 'axios';

import Spinner from 'components/Spinner/Spinner';

import AuthContext from 'context/AuthContext/auth-context';

const VerifyOtp = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const email = state?.email;

  const { token } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [otpVal1, setOtpVal1] = useState('');
  const [otpVal2, setOtpVal2] = useState('');
  const [otpVal3, setOtpVal3] = useState('');
  const [otpVal4, setOtpVal4] = useState('');

  const otpVal1ChangeHandler = e => {
    if (e.target.value.trim().length > 1) return;

    setOtpVal1(e.target.value);
  };

  const otpVal2ChangeHandler = e => {
    if (e.target.value.trim().length > 1) return;

    setOtpVal2(e.target.value);
  };

  const otpVal3ChangeHandler = e => {
    if (e.target.value.trim().length > 1) return;

    setOtpVal3(e.target.value);
  };

  const otpVal4ChangeHandler = e => {
    if (e.target.value.trim().length > 1) return;

    setOtpVal4(e.target.value);
  };

  const otpCodeSubmitHandler = async e => {
    e.preventDefault();

    const otp = +`${otpVal1}${otpVal2}${otpVal3}${otpVal4}`;

    console.log(otp);

    try {
      setIsLoading(true);
      const res = await axios.post(
        'http://localhost:90/otp/verify',
        { otp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);

      if (res.data.verified) {
        navigate('/otp/success');
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="verify-otp-container text-center">
        <h3 className="verify-otp-title mb-3">
          Please enter the One Time Password (OTP) to verify your account
        </h3>
        <p className="verify-otp-description">
          A OTP has been sent to email {email && email}
        </p>

        <form onSubmit={otpCodeSubmitHandler}>
          <div className="otp-input-container ">
            <Input
              onChange={otpVal1ChangeHandler}
              min={0}
              max={9}
              type="number"
              value={otpVal1}
            />
            <Input
              onChange={otpVal2ChangeHandler}
              min={0}
              max={9}
              type="number"
              value={otpVal2}
            />
            <Input
              onChange={otpVal3ChangeHandler}
              min={0}
              max={9}
              type="number"
              value={otpVal3}
            />
            <Input
              onChange={otpVal4ChangeHandler}
              min={0}
              max={9}
              type="number"
              value={otpVal4}
            />
          </div>

          <div className="d-flex align-items-center justify-content-center w-100">
            <Button
              onClick={otpCodeSubmitHandler}
              type="submit"
              className="btn-validate-otp mb-5 d-flex align-items-center justify-content-center"
            >
              {isLoading ? <Spinner /> : 'Validate OTP'}
            </Button>
          </div>
        </form>

        <p className="otp-not-received-text">
          Did not receive the OTP? <a href="/">Resend OTP</a>
        </p>
      </div>
    </>
  );
};

export default VerifyOtp;
