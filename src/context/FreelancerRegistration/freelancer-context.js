import { createContext, useState } from 'react';

const FreelancerRegistrationContext = createContext({
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
});

export const FreelancerRegistrationProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [workExperiences, setWorkExperiences] = useState([]);
  const [educationQualifications, setEducationQualifications] = useState([]);
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState([]);
  const [hourlyRate, setHourlyRate] = useState('');
  const [preferences, setPreferences] = useState({});

  const contextValues = {
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
  };

  return (
    <FreelancerRegistrationContext.Provider value={contextValues}>
      {children}
    </FreelancerRegistrationContext.Provider>
  );
};

export default FreelancerRegistrationContext;
