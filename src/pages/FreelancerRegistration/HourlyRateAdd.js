import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

const HourlyRateAdd = () => {
  const freelancerCtx = useContext(FreelancerRegistrationContext);
  const navigate = useNavigate();

  const [hourlyRate, setHourlyRate] = useState('');

  const serviceCharge = 0.2 * +hourlyRate;
  const netAmount = +hourlyRate - serviceCharge;

  const hourlyRateChangeHandler = e => {
    setHourlyRate(e.target.value);
  };

  const hourlyFormSubmitHandler = e => {
    e.preventDefault();

    freelancerCtx.setHourlyRate(hourlyRate);

    navigate('/add/preferences');
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 add-rate-page">
        <h3 className="page-title mb-4">Let's set your hourly rate.</h3>
        <p className="page-description">
          Clients will be able to see the rate you add once your profile is
          published.
        </p>
        <form onSubmit={hourlyFormSubmitHandler}>
          <div className="rate-info-container d-flex flex-column mb-5">
            <div className="rate-info d-flex align-items-center justify-content-between">
              <div className="rate-info-text">
                <h4 className="rate-info-title">Hourly Rate</h4>
                <p className="rate-info-description">
                  Total amount client will see
                </p>
              </div>

              <Input
                onChange={hourlyRateChangeHandler}
                className="text-end"
                type="number"
                placeholder="$0.00"
              />
            </div>

            <div className="rate-info d-flex align-items-center justify-content-between">
              <div className="rate-info-text">
                <h4 className="rate-info-title">OwnFreelancer Service Fee</h4>
                <p className="rate-info-description">
                  20% of your fee will be deducted by OwnFreelance as service
                  fee
                </p>
              </div>

              <span className="deducted-rate">$ -{serviceCharge}</span>
            </div>

            <div className="rate-info d-flex align-items-center justify-content-between">
              <div className="rate-info-text">
                <h4 className="rate-info-title">Your net income</h4>
                <p className="rate-info-description">
                  The estimated amount you will receive
                </p>
              </div>
              <Input
                disabled={true}
                className="text-end"
                type="number"
                placeholder="$0.00"
                value={netAmount}
              />
            </div>
          </div>
          <div className="text-end">
            <Button
              type="submit"
              className="btn btn-registration btn-round"
              label="Next"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default HourlyRateAdd;
