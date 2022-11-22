import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Skills = () => {
  const navigate = useNavigate();

  const navigateToScope = () => {
    navigate('/add/client/scopes');
  };
  return (
    <>
      <Navbar />
      <div className="container w-50 add-skills-page">
      <h5 className="headline-color" >2/4 Skills</h5>

        <h3 className="page-title mb-5">
        What are the main skills required for your work?
        </h3>
        <p className="page-description mb-5">
        Search skills or add your own
        </p>
        <form >
          <Input
              
            className="mb-5"
            type="text"
            placeholder="Web Designer | React developer"
          />
          <div className="skills-container d-flex align-item-center mb-5">
            
              <div
                className="skill px-3 py-2 d-flex align-items-center"
              >
                <span className="skill-text"></span>
                <span role="button" className="skill-cross">
                  &#10005;
                </span>
              </div>
          </div>
        </form>
        <div className="text-end">
          <Button
          onClick={navigateToScope}
            className="btn btn-registration btn-round"
            label="Next"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
