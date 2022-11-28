import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    setProfileUrl,
  } = useContext(FreelancerRegistrationContext);
  const navigate = useNavigate();

  const [language, setLanguage] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [profileImg, setProfileImg] = useState(null);

  const [languageHasError, setLanguageHasError] = useState(false);
  const [phoneNoHasError, setPhoneNoHasError] = useState(false);
  const [profileImgHasError, setProfileImgHasError] = useState(false);

  const formIsInvalid =
    language.trim().length === 0 ||
    phoneNo.trim().length === 0 ||
    profileImg === null;

  const languageChangeHandler = e => {
    setLanguageHasError(e.target.value.trim().length === 0);
    setLanguage(e.target.value);
  };

  const phoneNoChangeHandler = e => {
    setPhoneNoHasError(e.target.value.trim().length === 0);
    setPhoneNo(e.target.value);
  };

  const profileImgChangeHandler = e => {
    setProfileImgHasError(e.target.files.length === 0);
    setProfileImg(e.target.files[0]);
    setProfileUrl(URL.createObjectURL(e.target.files[0]));
  };

  const preferencesFormSubmitHandler = async e => {
    e.preventDefault();

    if (language.trim().length === 0) {
      setLanguageHasError(true);
    }

    if (phoneNo.trim().length === 0) {
      setPhoneNoHasError(true);
    }

    if (profileImg === null) {
      setProfileImgHasError(true);
    }

    if (formIsInvalid) return;

    const data = new FormData();

    data.append('userType', 'Freelancer');
    data.append('jobTitle', title);
    data.append('workExperiences', JSON.stringify(workExperiences));
    data.append('educationDetails', JSON.stringify(educationQualifications));
    data.append('skills', JSON.stringify(skills));
    data.append('bio', bio);
    data.append('hourlyRate', hourlyRate);
    data.append(
      'preferences',
      JSON.stringify({ language, phoneNumber: phoneNo })
    );
    data.append('img', profileImg);

    const res = await axios.post('http://localhost:90/freelancer/add', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('__token__')}`,
      },
    });

    if (res.status === 200) {
      navigate('/profile/submit');
    }
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
            <div>
              <Input
                id="language"
                label="Add your Preferred language:"
                type="text"
                placeholder="Ex: English"
                name="language"
                onChange={languageChangeHandler}
              />
              {languageHasError && (
                <p className="mt-3 error-msg">Language can not be empty.</p>
              )}
            </div>

            <div>
              <Input
                id="number"
                label="Your phone Number:"
                type="text"
                placeholder="Ex: 98......."
                name="number"
                onChange={phoneNoChangeHandler}
              />
              {phoneNoHasError && (
                <p className="mt-3 error-msg">Phone number can not be empty.</p>
              )}
            </div>

            <div>
              <Input
                className="mb-4"
                id="picture"
                label="Add your profile photo:"
                type="file"
                name="picture"
                onChange={profileImgChangeHandler}
              />
              {profileImgHasError && (
                <p className="mt-3 error-msg">
                  Profile image must be uploaded.
                </p>
              )}
            </div>
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
