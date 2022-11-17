import { useContext } from 'react';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

const FreelancerPreferences = () => {
  const {
    bio,
    title,
    workExperiences,
    educationQualifications,
    skills,
    hourlyRate,
    preferences,
  } = useContext(FreelancerRegistrationContext);

  const preferencesFormSubmitHandler = e => {
    e.preventDefault();
    console.log({
      bio,
      title,
      workExperiences,
      educationQualifications,
      skills,
      hourlyRate,
      preferences,
    });
  };

  return (
    <>
      <Navbar />

      <div className="container overflow-hidden section-experience my-5 w-50">
        <h1 className="main-heading-experience mb-5">
          Add your Preferences here:
        </h1>

        <form
          onSubmit={preferencesFormSubmitHandler}
          className="experience-form mb-5"
        >
          <div className="experience-form-controls d-flex flex-column">
            <Input
              id="language"
              label="Add your Preferred language:"
              type="text"
              placeholder="Ex: English"
              name="language"
            />

            <Input
              id="number"
              label="Your phone Number:"
              type="text"
              placeholder="Ex: 98......."
              name="service"
            />

            <Input
              className="mb-4"
              id="picture"
              label="Add your profile photo:"
              type="file"
              name="picture"
            />
          </div>

          <div className="form-action text-center form-btn">
            <Button
              className="btn-round btn-submit"
              type="submit"
              label="Next"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FreelancerPreferences;
