import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

const SkillsAdd = () => {
  const freelancerCtx = useContext(FreelancerRegistrationContext);
  const navigate = useNavigate();

  const [skillId, setSkillId] = useState(1);
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const skillChangeHandler = e => {
    setSkill(e.target.value);
  };

  const skillFormSubmitHandler = e => {
    e.preventDefault();

    setSkills(prevSkills => [...prevSkills, { id: skillId, label: skill }]);

    setSkillId(prevId => ++prevId);
  };

  const skillsAddHandler = () => {
    freelancerCtx.setSkills(skills);
    navigate('/add/bio');
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 add-skills-page">
        <h3 className="page-title mb-5">
          Now tell us what work are you here to offer?
        </h3>
        <p className="page-description mb-5">
          Skills makes it easier for clients to find the right talent for them.
          So, add the skills you have.
        </p>
        <form onSubmit={skillFormSubmitHandler}>
          <Input
            onChange={skillChangeHandler}
            className="mb-5"
            type="text"
            placeholder="Example: Full stack developer | React developer"
          />
          <div className="skills-container d-flex align-item-center mb-5">
            {skills.map(skill => (
              <div
                key={skill.id}
                className="skill px-3 py-2 d-flex align-items-center"
              >
                <span className="skill-text">{skill.label}</span>
                <span role="button" className="skill-cross">
                  &#10005;
                </span>
              </div>
            ))}
          </div>
        </form>
        <div className="text-end">
          <Button
            onClick={skillsAddHandler}
            className="btn btn-registration btn-round"
            label="Next"
          />
        </div>
      </div>
    </>
  );
};

export default SkillsAdd;
