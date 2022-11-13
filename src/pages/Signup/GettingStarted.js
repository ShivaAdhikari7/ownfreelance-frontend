import { useState } from "react";
import Button from "components/Button/Button";

import freeLancerImg from "assets/images/freelancer.png";

import clientImg from "assets/images/client.png";
import RegistrationNavbar from "components/Navbar/RegistrationNavbar";

const GettingStarted = () => {
  return (
    <div>
      <RegistrationNavbar />
      <div className="container overflow-hidden section-choice choice-container">
        <h1 className="main-heading">Join as a client or Freelancer</h1>
        <div className="row text-center row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div className="col-sm-4 choice-client choice">
            <img
              className="client-img choice-img"
              src={clientImg}
              alt="Illustration of girl behind phone"
            />
            <p className="choice-img__description client-img__description">
              I'm a client, Hiring for a project
            </p>
          </div>
          <div className="col-sm-4 choice-freelancer choice">
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
        <div className="text-center choice-btn">
          <Button
            className="btn-round"
            type="submit"
            label="Create my account"
          />
        </div>
        <div className="login-display text-center d-flex mt-5 justify-content-center">
          <p className="login-text">Already have an account?</p>
          <a href="/" className="login-link">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
