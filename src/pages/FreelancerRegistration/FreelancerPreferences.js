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
  const [profileImg, setProfileImg] = useState();

  const languageChangeHandler = e => {
    setLanguage(e.target.value);
  };

  const phoneNoChangeHandler = e => {
    setPhoneNo(e.target.value);
  };

  const profileImgChangeHandler = e => {
    setProfileImg(e.target.files[0]);
    setProfileUrl(URL.createObjectURL(e.target.files[0]));
  };

  const preferencesFormSubmitHandler = async e => {
    e.preventDefault();

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
            <Input
              id="language"
              label="Add your Preferred language:"
              type="text"
              placeholder="Ex: English"
              name="language"
              onChange={languageChangeHandler}
            />

            <Input
              id="number"
              label="Your phone Number:"
              type="text"
              placeholder="Ex: 98......."
              name="number"
              onChange={phoneNoChangeHandler}
            />

            <Input
              className="mb-4"
              id="picture"
              label="Add your profile photo:"
              type="file"
              name="picture"
              onChange={profileImgChangeHandler}
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
