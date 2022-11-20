import Navbar from "components/Navbar/Navbar";

import budget from 'assets/images/budget-rate-icon.jpg';
import rateImg from 'assets/images/budget-time-icon.png';
import Button from 'components/Button/Button';
import { useNavigate } from "react-router-dom";

const Budget = () => {
    const navigate = useNavigate();

    const navigateToDescription = () => {
      navigate('/add/client/description');
    };
    return(
        <>
      <Navbar/>
      <div className="container overflow-hidden section-choice">
      <h5 className="headline-color" >4/4 Budget</h5>
        <h1 className="page-title mb-2">Tell us about your budget</h1>
        <h5 className="page-description">
        This will help us match you to talent within your range.
        </h5>
        <div className="row text-center row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div
            role="button"
            tabIndex={0}
            className="rate-div choice pt-2"
          >
            <img
              className="rate-img choice-img"
              src={rateImg}
              alt="time"
            />
            <p className="choice-img__description client-img__description">
              Hourly Rate
            </p>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="choice-freelancer choice pt-2"
          >
            <img
              className="time-img choice-img"
              src={budget}
              alt="rate"
            />
            <p className="choice-img__description client-img__description">
              Project Rate
            </p>
          </div>
        </div>
        <div className="text-center choice-btn mt-5">
          <Button
          onClick={navigateToDescription}
            className="btn-round "
            type="submit"
            label=" Add Description"
          />
        </div>
      </div>
    </>

    )


}
export default Budget;