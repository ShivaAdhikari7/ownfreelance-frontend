import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';

import freeLancerImg from 'assets/images/freelancer.png';
import clientImg from 'assets/images/client.png';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';
import ClientRegistrationContext from 'context/ClientRegistration/client-context';

const GettingStarted = () => {
  const navigate = useNavigate();

  const freelancerCtx = useContext(FreelancerRegistrationContext);
  const clientCtx = useContext(ClientRegistrationContext);

  const navigateToClientRegistration = () => {
    clientCtx.setUserType('Client');
    localStorage.setItem('userType', 'Client');
    navigate('/add/client/headline');
  };

  const navigateToFreelancerRegistration = () => {
    freelancerCtx.setUserType('Freelancer');
    localStorage.setItem('userType', 'Freelancer');
    navigate('/add/title');
  };

  return (
    <>
      <Navbar />
      <div className="container overflow-hidden section-choice">
        <h1 className="main-heading">Join as a client or Freelancer</h1>
        <div className="row text-center row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div
            role="button"
            onClick={navigateToClientRegistration}
            tabIndex={0}
            className="choice-client choice"
          >
            <img
              className="client-img choice-img"
              src={clientImg}
              alt="Illustration of girl behind phone"
            />
            <p className="choice-img__description client-img__description">
              I'm a client, Hiring for a project
            </p>
          </div>
          <div
            role="button"
            onClick={navigateToFreelancerRegistration}
            tabIndex={0}
            className="choice-freelancer choice"
          >
            <img
              className="freelancer-img choice-img"
              src={freeLancerImg}
              alt="Illustration of girl behind phone"
            />
            <p className="choice-img__description client-img__description">
              I'm a freelancer, Looking for a work
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
