import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';

import ClientRegistrationContext from 'context/ClientRegistration/client-context';

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
  'Figma',
  'Wordpress',
  'Webflow',
  'AdobeXD',
];

const Skills = () => {
  const navigate = useNavigate();
  const clientCtx = useContext(ClientRegistrationContext);

  const [skill, setSkill] = useState('');
  const [skillId, setSkillId] = useState(1);
  const [skills, setSkills] = useState([]);

  const skillChangeHandler = e => {
    setSkill(e.target.value);
  };

  const skillSubmitHandler = e => {
    e.preventDefault();

    setSkills(prevSkills => [...prevSkills, { skillId, label: skill }]);
    setSkillId(prevId => ++prevId);
  };

  const navigateToScope = () => {
    clientCtx.setSkills(skills);

    navigate('/add/client/scopes');
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
        <h5 className="headline-color">2/4 Skills</h5>

        <h3 className="page-title mb-5">
          What are the main skills required for your work?
        </h3>
        <p className="page-description mb-5">
          Add skills needed for your project
        </p>
        <form onSubmit={skillSubmitHandler}>
          <div>
            <Input
              className="mb-4"
              type="text"
              placeholder="Web Designer | React developer"
              onChange={skillChangeHandler}
            />
          </div>
          {skills.length ? (
            <div className="skills-container d-flex align-item-center mb-5">
              {skills.map(skill => {
                return (
                  <div
                    key={skill.id}
                    className="skill px-3 py-2 d-flex align-items-center"
                  >
                    <span className="skill-text">{skill.label}</span>
                    <span
                      role="button"
                      onClick={removeSkillHandler.bind(null, skill.label)}
                      className="skill-cross"
                    >
                      &#10005;
                    </span>
                  </div>
                );
              })}
            </div>
          ) : null}
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
            type="submit"
            className="btn btn-registration btn-round"
            label="Next"
            onClick={navigateToScope}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Skills;
