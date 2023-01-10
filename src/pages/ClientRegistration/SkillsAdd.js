import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";

import ClientRegistrationContext from "context/ClientRegistration/client-context";

const Skills = () => {
  const navigate = useNavigate();
  const clientCtx = useContext(ClientRegistrationContext);

  const [skill, setSkill] = useState("");
  const [skillId, setSkillId] = useState(1);
  const [skills, setSkills] = useState([]);

  const [skillHasError, setSkillHasError] = useState(false);

  const formIsInvalid = skill.trim().length === 0;

  const skillChangeHandler = (e) => {
    setSkillHasError(e.target.value.trim().length === 0);
    setSkill(e.target.value);
  };

  const skillSubmitHandler = (e) => {
    e.preventDefault();

    if (skill.trim().length === 0) setSkillHasError(true);

    if (formIsInvalid) return;

    setSkills((prevSkills) => [...prevSkills, { skillId, label: skill }]);
    setSkillId((prevId) => ++prevId);
  };

  const navigateToScope = () => {
    clientCtx.setSkills(skills);

    if (formIsInvalid) return;

    navigate("/add/client/scopes");
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
              className="mb-5"
              type="text"
              placeholder="Web Designer | React developer"
              onChange={skillChangeHandler}
            />
            {skillHasError && (
              <p className="mt-3 error-msg">Skill can not be empty.</p>
            )}
          </div>
          <div className="skills-container d-flex align-item-center mb-5">
            {skills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="skill px-3 py-2 d-flex align-items-center"
                >
                  <span className="skill-text">{skill.label}</span>
                  <span role="button" className="skill-cross">
                    &#10005;
                  </span>
                </div>
              );
            })}
          </div>
        </form>
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
