import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

const SUGGESTED_OPTIONS = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'NodeJS',
  'Bootstrap',
  'MongoDB',
  'AngularJS',
  'VueJS',
  'Flutter',
  'Swift',
  'Tailwind',
  'SQL',
  'Oracle',
  'React Native',
  'Kotlin',
  'Ruby on Rails',
  'Python',
  'Django',
];

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

  const selectSkill = e => {
    const selectedSkill = e.target.dataset.value;

    if (skills.find(skill => skill.label === selectedSkill)) return;

    setSkills(prevSkills => [
      ...prevSkills,
      { id: skillId, label: selectedSkill },
    ]);

    setSkillId(prevId => ++prevId);
  };

  const removeSkillHandler = label => {
    const skillIndex = skills.findIndex(skill => skill.label === label);

    const tempSkills = [...skills];

    tempSkills.splice(skillIndex, 1);

    setSkills(tempSkills);
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
          <div className="mb-4">
            <Input
              onChange={skillChangeHandler}
              type="text"
              placeholder="Example: Full stack developer | React developer"
            />
          </div>
          <div className="skills-container d-flex align-item-center mb-5">
            {skills.map(skill => (
              <div
                key={skill.id}
                className="skill px-3 py-2 d-flex align-items-center"
              >
                <span className="skill-text">{skill.label}</span>
                <span
                  onClick={removeSkillHandler.bind(null, skill.label)}
                  role="button"
                  className="skill-cross"
                >
                  &#10005;
                </span>
              </div>
            ))}
          </div>
        </form>

        <div className="suggested-skills w-50">
          <h4 className="mb-4">Suggested skills</h4>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            {SUGGESTED_OPTIONS.map(option => (
              <span
                key={option}
                role="button"
                onClick={selectSkill}
                data-value={option}
              >
                {option}
              </span>
            ))}
          </div>
        </div>

        <div className="text-end">
          <Button
            onClick={skillsAddHandler}
            className="btn btn-registration btn-round"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default SkillsAdd;
