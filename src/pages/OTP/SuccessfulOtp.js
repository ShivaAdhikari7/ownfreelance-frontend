import { NavLink } from 'react-router-dom';

import emailVerifiedIcon from 'assets/images/email-verified-icon.png';

import Navbar from 'components/Navbar/Navbar';

const SuccessfulOtp = () => {
  return <>
  <Navbar/>
    <div className="container w-50 overflow-hidden otp-success-page text-center d-flex flex-column align-items-center">
      <img src={emailVerifiedIcon} alt="Email verification icon" />
      <p className="success-text">🎉 Congratulations Your email has been verified successfully.</p>
      <NavLink className="py-4 px-5 btn btn-getstarted" to="/getstarted">
        Continue profile setup
      </NavLink>
    </div></>
  ;
};

export default SuccessfulOtp;
