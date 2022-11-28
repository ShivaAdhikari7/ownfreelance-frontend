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

  const [schoolNameHasError, setSchoolNameHasError] = useState(false);
  const [degreeHasError, setDegreeHasError] = useState(false);
  const [studyFieldHasError, setStudyFieldHasError] = useState(false);
  const [attendedDateHasError, setAttendedDateHasError] = useState(false);
  const [endDateHasError, setEndDateHasError] = useState(false);
  const [schoolDescriptionHasError, setSchoolDescriptionHasError] =
    useState(false);

  const formIsInvalid =
    schoolName.trim().length === 0 ||
    degree.trim().length === 0 ||
    studyField.trim().length === 0 ||
    attendedDate.trim().length === 0 ||
    endDate.trim().length === 0 ||
    schoolDescription.trim().length === 0;

  const schoolNameChangeHandler = e => {
    setSchoolNameHasError(e.target.value.trim().length === 0);
    setSchoolName(e.target.value);
  };

  const degreeChangeHandler = e => {
    setDegreeHasError(e.target.value.trim().length === 0);
    setDegree(e.target.value);
  };

  const studyFieldChangeHandler = e => {
    setStudyFieldHasError(e.target.value.trim().length === 0);
    setStudyField(e.target.value);
  };

  const attendedDateChangeHandler = e => {
    setAttendedDateHasError(e.target.value.trim().length === 0);
    setAttendedDate(e.target.value);
  };

  const endDateChangeHandler = e => {
    setEndDateHasError(e.target.value.trim().length === 0);
    setEndDate(e.target.value);
  };

  const schoolDescriptionChangeHandler = e => {
    setSchoolDescriptionHasError(e.target.value.trim().length === 0);
    setSchoolDescription(e.target.value);
  };

  const educationQualificationFormSubmitHandler = e => {
    e.preventDefault();

    if (schoolName.trim().length === 0) setSchoolNameHasError(true);
    if (degree.trim().length === 0) setDegreeHasError(true);
    if (studyField.trim().length === 0) setStudyFieldHasError(true);
    if (attendedDate.trim().length === 0) setAttendedDateHasError(true);
    if (endDate.trim().length === 0) setEndDateHasError(true);
    if (schoolDescription.trim().length === 0)
      setSchoolDescriptionHasError(true);

    if (formIsInvalid) return;

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
          <div>
            <Input
              id="school"
              label="School"
              type="text"
              placeholder="Enter the school name"
              name="school"
              onChange={schoolNameChangeHandler}
            />
            {schoolNameHasError && (
              <p className="mt-3 error-msg">School name can not be empty.</p>
            )}
          </div>

          <div>
            <Input
              id="degree"
              label="Degree Name"
              type="text"
              placeholder="Enter degree name"
              name="degree"
              onChange={degreeChangeHandler}
            />
            {degreeHasError && (
              <p className="mt-3 error-msg">Degree can not be empty.</p>
            )}
          </div>

          <div>
            <Input
              id="studyField"
              label="Field of study"
              type="text"
              placeholder="Enter field of study"
              name="studyField"
              onChange={studyFieldChangeHandler}
            />
            {studyFieldHasError && (
              <p className="mt-3 error-msg">Study field can not be empty.</p>
            )}
          </div>

          <div className="date-input-container d-flex align-items-center">
            <div className="w-100">
              <Input
                id="attendedDate"
                label="Start date"
                type="date"
                name="attendedDate"
                onChange={attendedDateChangeHandler}
              />
              {attendedDateHasError && (
                <p className="mt-3 error-msg">
                  Attended date can not be empty.
                </p>
              )}
            </div>

            <div className="w-100">
              <Input
                id="endDate"
                label="
              End date"
                type="date"
                name="endDate"
                onChange={endDateChangeHandler}
              />
              {endDateHasError && (
                <p className="error-msg mt-3">End date can not be empty.</p>
              )}
            </div>
          </div>

          <div>
            <TextArea
              id="description"
              label="Description:"
              type="text"
              placeholder="Enter education description"
              name="description"
              onChange={schoolDescriptionChangeHandler}
            />
            {schoolDescriptionHasError && (
              <p className="mt-3 error-msg">Description can not be empty.</p>
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

export default EducationForm;
