import { NavLink } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

const Dashboard = () => {
  return <>
  <Navbar/>
    <div className="container w-50 overflow-hidden otp-success-page text-center d-flex flex-column align-items-center">
      {/* <img src={emailVerifiedIcon} alt="Email verification icon" /> */}
      <p className="success-text">🎉 Welcome to OwnFreelance</p>
      <NavLink className="py-4 px-5 btn btn-getstarted" >
        Go to Dashboard
      </NavLink>
    </div></>
  ;
};

export default Dashboard;
