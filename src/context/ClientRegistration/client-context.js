import { createContext, useState } from 'react';

const ClientRegistrationContext = createContext({
  userType: '',
  setUserType: type => {},
  headline: '',
  setHeadline: headline => {},
  skills: [],
  setSkills: skill => {},
  scope: {},
  setScope: scope => {},
  budget: '',
  setBudget: rate => {},
  description: {},
  setDescription: description => {},
  requiredJobTitle: '',
  setRequiredJobTitle: title => {},
});

export const ClientRegistrationProvider = ({ children }) => {
  const [userType, setUserType] = useState();
  const [headline, setHeadline] = useState('');
  const [scope, setScope] = useState({});
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [requiredJobTitle, setRequiredJobTitle] = useState('');
  const [skills, setSkills] = useState([]);

  const contextValues = {
    userType,
    setUserType,
    headline,
    setHeadline,
    scope,
    setScope,
    budget,
    setBudget,
    description,
    setDescription,
    requiredJobTitle,
    setRequiredJobTitle,
    skills,
    setSkills,
  };

  return (
    <ClientRegistrationContext.Provider value={contextValues}>
      {children}
    </ClientRegistrationContext.Provider>
  );
};

export default ClientRegistrationContext;
