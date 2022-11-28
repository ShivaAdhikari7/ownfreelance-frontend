import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import TextArea from 'components/TextArea/TextArea';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

const WorkExperience = () => {
  const freelancerCtx = useContext(FreelancerRegistrationContext);
  const navigate = useNavigate();

  const [workTitle, setWorkTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyCity, setCompanyCity] = useState('');
  const [companyCountry, setCompanyCountry] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');
  const [workDescription, setWorkDescription] = useState('');

  const [workTitleHasError, setWorkTitleHasError] = useState(false);
  const [companyNameHasError, setCompanyNameHasError] = useState(false);
  const [companyCityHasError, setCompanyCityHasError] = useState(false);
  const [companyCountryHasError, setCompanyCountryHasError] = useState(false);
  const [workStartDateHasError, setWorkStartDateHasError] = useState(false);
  const [workEndDateHasError, setWorkEndDateHasError] = useState(false);
  const [workDescriptionHasError, setWorkDescriptionHasError] = useState(false);

  const formIsInvalid =
    workTitle.trim().length === 0 ||
    companyName.trim().length === 0 ||
    companyCity.trim().length === 0 ||
    companyCountry.trim().length === 0 ||
    workStartDate.trim().length === 0 ||
    workEndDate.trim().length === 0 ||
    workDescription.trim().length === 0;

  const workTitleChangeHandler = e => {
    setWorkTitleHasError(e.target.value.trim().length === 0);
    setWorkTitle(e.target.value);
  };

  const companyNameChangeHandler = e => {
    setCompanyNameHasError(e.target.value.trim().length === 0);
    setCompanyName(e.target.value);
  };

  const companyCityChangeHandler = e => {
    setCompanyCityHasError(e.target.value.trim().length === 0);
    setCompanyCity(e.target.value);
  };

  const companyCountryChangeHandler = e => {
    setCompanyCountryHasError(e.target.value.trim().length === 0);
    setCompanyCountry(e.target.value);
  };

  const workStartDateChangeHandler = e => {
    setWorkStartDateHasError(e.target.value.trim().length === 0);
    setWorkStartDate(e.target.value);
  };

  const workEndDateChangeHandler = e => {
    setWorkEndDateHasError(e.target.value.trim().length === 0);
    setWorkEndDate(e.target.value);
  };

  const workDescriptionChangeHandler = e => {
    setWorkDescriptionHasError(e.target.value.trim().length === 0);
    setWorkDescription(e.target.value);
  };

  const workExperienceFromSubmitHandler = e => {
    e.preventDefault();

    if (workTitle.trim().length === 0) {
      setWorkTitleHasError(true);
    }

    if (companyName.trim().length === 0) {
      setCompanyNameHasError(true);
    }

    if (companyCity.trim().length === 0) {
      setCompanyCityHasError(true);
    }

    if (companyCountry.trim().length === 0) {
      setCompanyCountryHasError(true);
    }

    if (workStartDate.trim().length === 0) {
      setWorkStartDateHasError(true);
    }

    if (workEndDate.trim().length === 0) {
      setWorkEndDateHasError(true);
    }

    if (workDescription.trim().length === 0) {
      setWorkDescriptionHasError(true);
    }

    if (formIsInvalid) return;

    const data = [
      {
        workTitle,
        companyName,
        companyCity,
        companyCountry,
        workStartDate,
        workEndDate,
        workDescription,
      },
    ];

    freelancerCtx.setWorkExperiences(data);

    navigate('/add/education/qualification');
  };

  return (
    <>
      <Navbar />

      <div className="container overflow-hidden section-experience w-50 my-5">
        <h1 className="main-heading-experience mb-5">Add work experience:</h1>
        <form
          onSubmit={workExperienceFromSubmitHandler}
          className="experience-form d-flex flex-column"
        >
          <div>
            <Input
              id="title"
              label="Title"
              type="text"
              placeholder="Enter the title of job"
              name="title"
              onChange={workTitleChangeHandler}
            />
            {workTitleHasError && (
              <p className="mt-3 error-msg">Work title can not be empty.</p>
            )}
          </div>

          <div>
            <Input
              id="company"
              label="Company Name"
              type="text"
              placeholder="Enter company name"
              name="company"
              onChange={companyNameChangeHandler}
            />
            {companyNameHasError && (
              <p className="mt-3 error-msg">Company name can not be empty.</p>
            )}
          </div>

          <div className="location-input-container d-flex align-items-center">
            <div className="w-100">
              <Input
                id="city"
                label="City"
                type="text"
                placeholder="Enter city name"
                name="city"
                onChange={companyCityChangeHandler}
              />
              {companyCityHasError && (
                <p className="mt-3 error-msg">
                  Company city name can not be empty.
                </p>
              )}
            </div>
            <div className="w-100">
              <Input
                id="country"
                label="Country"
                type="text"
                placeholder="Enter country name"
                name="location"
                onChange={companyCountryChangeHandler}
              />
              {companyCountryHasError && (
                <p className="mt-3 error-msg">
                  Company country can not be empty.
                </p>
              )}
            </div>
          </div>

          <div className=" date-input-container d-flex align-items-center">
            <div className="w-100">
              <Input
                id="start-date"
                label="Start date"
                type="date"
                name="start-date"
                onChange={workStartDateChangeHandler}
              />
              {workStartDateHasError && (
                <p className="mt-3 error-msg">
                  Work start date can not be empty.
                </p>
              )}
            </div>

            <div className="w-100">
              <Input
                id="end-date"
                label="
              End date"
                type="date"
                name="end-date"
                onChange={workEndDateChangeHandler}
              />
              {workEndDateHasError && (
                <p className="mt-3 error-msg">
                  Work end date can not be empty.
                </p>
              )}
            </div>
          </div>

          <div>
            <TextArea
              id="description"
              label="Description:"
              type="text"
              placeholder="Enter job description"
              name="description"
              onChange={workDescriptionChangeHandler}
            />
            {workDescriptionHasError && (
              <p className="mt-3 error-msg">
                Work description can not be empty.
              </p>
            )}
          </div>

          <div className="text-end">
            <Button
              className="btn-round btn-submit btn-registration"
              type="submit"
              label="Next"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default WorkExperience;
