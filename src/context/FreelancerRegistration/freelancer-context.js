import { createContext, useState } from 'react';

const FreelancerRegistrationContext = createContext({
  userType: '',
  setUserType: type => {},
  title: '',
  setTitle: title => {},
  workExperiences: [],
  setWorkExperiences: experiences => {},
  educationQualifications: [],
  setEducationQualifications: qualifications => {},
  skills: [],
  setSkills: skill => {},
  bio: '',
  setBio: bio => {},
  hourlyRate: '',
  setHourlyRate: rate => {},
  preferences: {},
  setPreferences: preferences => {},
  profileUrl: '',
  setProfileUrl: url => {},
});

export const FreelancerRegistrationProvider = ({ children }) => {
  const [userType, setUserType] = useState('');
  const [title, setTitle] = useState('');
  const [workExperiences, setWorkExperiences] = useState([]);
  const [educationQualifications, setEducationQualifications] = useState([]);
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState([]);
  const [hourlyRate, setHourlyRate] = useState('');
  const [preferences, setPreferences] = useState({});
  const [profileUrl, setProfileUrl] = useState('');

  const contextValues = {
    userType,
    setUserType,
    title,
    setTitle,
    workExperiences,
    setWorkExperiences,
    educationQualifications,
    setEducationQualifications,
    skills,
    setSkills,
    bio,
    setBio,
    hourlyRate,
    setHourlyRate,
    preferences,
    setPreferences,
    profileUrl,
    setProfileUrl,
  };

  return (
    <FreelancerRegistrationContext.Provider value={contextValues}>
      {children}
    </FreelancerRegistrationContext.Provider>
  );
};

export default FreelancerRegistrationContext;
