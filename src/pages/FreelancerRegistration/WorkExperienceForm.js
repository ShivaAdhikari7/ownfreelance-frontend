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

  const workTitleChangeHandler = e => {
    setWorkTitle(e.target.value);
  };

  const companyNameChangeHandler = e => {
    setCompanyName(e.target.value);
  };

  const companyCityChangeHandler = e => {
    setCompanyCity(e.target.value);
  };

  const companyCountryChangeHandler = e => {
    setCompanyCountry(e.target.value);
  };

  const workStartDateChangeHandler = e => {
    setWorkStartDate(e.target.value);
  };

  const workEndDateChangeHandler = e => {
    setWorkEndDate(e.target.value);
  };

  const workDescriptionChangeHandler = e => {
    setWorkDescription(e.target.value);
  };

  const workExperienceFromSubmitHandler = e => {
    e.preventDefault();

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
          <Input
            id="title"
            label="Title"
            type="text"
            placeholder="Enter the title of job"
            name="title"
            onChange={workTitleChangeHandler}
          />

          <Input
            id="company"
            label="Company Name"
            type="text"
            placeholder="Enter company name"
            name="company"
            onChange={companyNameChangeHandler}
          />

          <div className="location-input-container d-flex align-items-center">
            <Input
              id="city"
              label="City"
              type="text"
              placeholder="Enter city name"
              name="city"
              onChange={companyCityChangeHandler}
            />
            <Input
              id="country"
              label="Country"
              type="text"
              placeholder="Enter country name"
              name="location"
              onChange={companyCountryChangeHandler}
            />
          </div>

          <div className=" date-input-container d-flex align-items-center">
            <Input
              id="start-date"
              label="Start date"
              type="date"
              name="start-date"
              onChange={workStartDateChangeHandler}
            />

            <Input
              id="end-date"
              label="
              End date"
              type="date"
              name="end-date"
              onChange={workEndDateChangeHandler}
            />
          </div>

          <TextArea
            id="description"
            label="Description:"
            type="text"
            placeholder="Enter job description"
            name="description"
            onChange={workDescriptionChangeHandler}
          />

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
