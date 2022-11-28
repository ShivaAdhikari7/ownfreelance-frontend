import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';

import ClientRegistrationContext from 'context/ClientRegistration/client-context';

const Scope = () => {
  const navigate = useNavigate();
  const clientCtx = useContext(ClientRegistrationContext);

  const [projectSize, setProjectSize] = useState('');
  const [projectDuration, setProjectDuration] = useState('');
  const [projectExperienceLevel, setProjectExperienceLevel] = useState('');

  const [projectSizeHasError, setProjectSizeHasError] = useState(false);
  const [projectDurationHasError, setProjectDurationHasError] = useState(false);
  const [projectExperienceLevelHasError, setProjectExperienceLevelHasError] =
    useState(false);

  const formIsInvalid =
    projectSize.trim().length === 0 ||
    projectDuration.trim().length === 0 ||
    projectExperienceLevel.trim().length === 0;

  const projectSizeChooseHandler = e => {
    setProjectSizeHasError(e.target.value.trim().length === 0);
    setProjectSize(e.target.value);
  };
  const projectDurationChooseHandler = e => {
    setProjectDurationHasError(e.target.value.trim().length === 0);
    setProjectDuration(e.target.value);
  };
  const projectExperienceChooseHandler = e => {
    setProjectExperienceLevelHasError(e.target.value.trim().length === 0);
    setProjectExperienceLevel(e.target.value);
  };

  const navigateToBudget = () => {
    if (projectDuration.trim().length === 0) {
      setProjectDurationHasError(true);
    }

    if (projectSize.trim().length === 0) {
      setProjectSizeHasError(true);
    }

    if (projectExperienceLevel.trim().length === 0) {
      setProjectExperienceLevelHasError(true);
    }

    if (formIsInvalid) return;

    const scope = {
      projectSize,
      projectDuration,
      projectExperienceLevel,
    };

    clientCtx.setScope(scope);

    navigate('/add/client/budget');
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 add-skills-page">
        <h5 className="headline-color">3/4 Scope</h5>

        <h3 className="page-title mb-5">
          Next, estimate the scope of your work.
        </h3>
        <p className="page-description mb-5">
          Consider the size of your project and the time it will take.
        </p>
        <div onChange={projectSizeChooseHandler}>
          <div className="mt-5">
            <h4>What is the size of your project?</h4>
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="radioProjectSize"
              value="Large"
            />
            <h5 className="form-check-label">Large</h5>
            <label>
              Longer term or complex initiatives (ex. design and build a full
              website)
            </label>
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="radioProjectSize"
              value="Medium"
            />
            <h5 className="form-check-label">Medium</h5>
            <label>Well-defined projects (ex. a landing page)</label>
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="radioProjectSize"
              value="Small"
            />
            <h5 className="form-check-label">Small</h5>
            <label>
              Quick and straightforward tasks (ex. update text and images on a
              webpage)
            </label>
          </div>
          {projectSizeHasError && (
            <p className="error-msg mt-3">Project size must be choose.</p>
          )}
        </div>
        <div onChange={projectDurationChooseHandler} className="mt-5">
          <h4>How long will your work take?</h4>

          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="flexRadioDuration"
              value="More than 6 months"
            />
            <h5 className="form-check-label">More than 6 months</h5>
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="flexRadioDuration"
              value="3 to 6 months"
            />
            <h5 className="form-check-label">3 to 6 months</h5>
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="flexRadioDuration"
              value="1 to 3 months"
            />
            <h5 className="form-check-label">1 to 3 months</h5>
          </div>
          {projectDurationHasError && (
            <p className="error-msg mt-3">Project duration must be choose.</p>
          )}
        </div>

        <div onChange={projectExperienceChooseHandler} className="mt-5">
          <h4>What level of experience will it need?</h4>

          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="flexRadioExperience"
              value="Entry level"
            />
            <h5 className="form-check-label">Entry level</h5>
            <label>Looking for someone relatively new to this field</label>
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="flexRadioExperience"
              value="Intermediate level"
            />
            <h5 className="form-check-label">Intermediate level</h5>
            <label>Looking for substantial experience in this field</label>
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input me-3"
              type="radio"
              name="flexRadioExperience"
              value="Expert level"
            />
            <h5 className="form-check-label">Expert level</h5>
            <label>
              Looking for comprehensive and deep expertise in this field
            </label>
          </div>

          {projectExperienceLevelHasError && (
            <p className="error-msg mt-3">Project experience must be choose.</p>
          )}
        </div>

        <div className="text-end">
          <Button
            onClick={navigateToBudget}
            className="btn btn-registration btn-round"
            label="Next"
          />
        </div>
      </div>
    </>
  );
};

export default Scope;
