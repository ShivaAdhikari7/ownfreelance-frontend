import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import TextArea from 'components/TextArea/TextArea';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

const EducationForm = () => {
  const freelancerCtx = useContext(FreelancerRegistrationContext);
  const navigate = useNavigate();

  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [studyField, setStudyField] = useState('');
  const [attendedDate, setAttendedDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [schoolDescription, setSchoolDescription] = useState('');

  const schoolNameChangeHandler = e => {
    setSchoolName(e.target.value);
  };

  const degreeChangeHandler = e => {
    setDegree(e.target.value);
  };

  const studyFieldChangeHandler = e => {
    setStudyField(e.target.value);
  };

  const attendedDateChangeHandler = e => {
    setAttendedDate(e.target.value);
  };

  const endDateChangeHandler = e => {
    setEndDate(e.target.value);
  };

  const schoolDescriptionChangeHandler = e => {
    setSchoolDescription(e.target.value);
  };

  const educationQualificationFormSubmitHandler = e => {
    e.preventDefault();

    const data = [
      {
        schoolName,
        degree,
        studyField,
        attendedDate,
        endDate,
        schoolDescription,
      },
    ];

    freelancerCtx.setEducationQualifications(data);

    navigate('/add/skills');
  };

  return (
    <>
      <Navbar />

      <div className="container overflow-hidden section-education w-50 my-5">
        <h1 className="main-heading-education mb-5">Add education history:</h1>
        <form
          onSubmit={educationQualificationFormSubmitHandler}
          className="education-form d-flex flex-column"
        >
          <Input
            id="school"
            label="School"
            type="text"
            placeholder="Enter the school name"
            name="school"
            onChange={schoolNameChangeHandler}
          />

          <Input
            id="degree"
            label="Degree Name"
            type="text"
            placeholder="Enter degree name"
            name="degree"
            onChange={degreeChangeHandler}
          />

          <Input
            id="studyField"
            label="Field of study"
            type="text"
            placeholder="Enter field of study"
            name="studyField"
            onChange={studyFieldChangeHandler}
          />

          <div className="date-input-container d-flex align-items-center">
            <Input
              id="attendedDate"
              label="Start date"
              type="date"
              name="attendedDate"
              onChange={attendedDateChangeHandler}
            />

            <Input
              id="endDate"
              label="
              End date"
              type="date"
              name="endDate"
              onChange={endDateChangeHandler}
            />
          </div>

          <TextArea
            id="description"
            label="Description:"
            type="text"
            placeholder="Enter education description"
            name="description"
            onChange={schoolDescriptionChangeHandler}
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

export default EducationForm;
