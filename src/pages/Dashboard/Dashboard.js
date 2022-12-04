import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';

const Dashboard = () => {
  const navigate= useNavigate();
  const navigateToDashboard = () => {

    navigate('/freelancer/profile');
  };
  return <>
  <Navbar/>
    <div className="container w-50 overflow-hidden otp-success-page text-center d-flex flex-column align-items-center">
      {/* <img src={emailVerifiedIcon} alt="Email verification icon" /> */}
      <p className="success-text">🎉 Welcome to OwnFreelance</p>
      <NavLink className="py-4 px-5 btn btn-getstarted" onClick={navigateToDashboard}  >
        Go to Dashboard
      </NavLink>
    </div></>
  ;
};

export default Dashboard;
