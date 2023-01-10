import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
import TextArea from 'components/TextArea/TextArea';

import ClientRegistrationContext from 'context/ClientRegistration/client-context';
import AuthContext from 'context/AuthContext/auth-context';

const Description = () => {
  const navigate = useNavigate();

  const { headline, budget, scope, skills } = useContext(
    ClientRegistrationContext
  );
  const { token, setIsLoggedIn } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectFile, setProjectFile] = useState(null);

  const [titleHasError, setTitleHasError] = useState(false);
  const [descriptionHasError, setDescriptionHasError] = useState(false);
  const [projectFileHasError, setProjectFileHasError] = useState(false);

  const formIsInvalid =
    title.trim().length === 0 ||
    description.trim().length === 0 ||
    projectFile === null;

  const titleChangeHandler = e => {
    setTitleHasError(e.target.value.trim().length === 0);
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = e => {
    setDescriptionHasError(e.target.value.trim().length === 0);
    setDescription(e.target.value);
  };

  const projectFileChangeHandler = e => {
    setProjectFileHasError(e.target.files.length === 0);
    setProjectFile(e.target.files[0]);
  };

  const formSubmitHandler = async e => {
    e.preventDefault();

    if (title.trim().length === 0) setTitleHasError(true);
    if (description.trim().length === 0) setDescriptionHasError(true);
    if (projectFile === null) setProjectFileHasError(true);

    if (formIsInvalid) return;

    const data = new FormData();

    data.append('userType', 'Client');
    data.append('headline', headline);
    data.append('skills', JSON.stringify(skills));
    data.append('scope', JSON.stringify(scope));
    data.append('file', projectFile);
    data.append('requiredJobTitle', title);
    data.append('hourlyRate', +budget);
    data.append('description', description);

    const res = await axios.post('http://localhost:90/client/add', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      setIsLoggedIn(true);

      navigate('/verification_successful', {
        state: {
          dashboard: { label: 'Visit my dashboard' },
          search: { label: 'Search for freelancers' },
        },
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 add-skills-page">
        <h3 className="page-title mb-5">Last step, start the conversation</h3>
        <h2>Talent are looking for:</h2>
        <ul className="mt-3 client-msg-list p-0">
          <li className="mt-3">
            - Clear expectations about your task or deliverables
          </li>
          <li className="mt-3">- The skills required for your work</li>
          <li className="mt-3">- Good communication</li>
          <li className="mt-3">
            - Details about how you or your team like to work
          </li>
        </ul>
        <form className="mt-5" onSubmit={formSubmitHandler}>
          <div>
            <Input
              label="Add a title"
              placeholder="UI/UX designer"
              className="mb-3"
              type="text"
              onChange={titleChangeHandler}
            />
            {titleHasError && (
              <p className="mt-3 error-msg">Title can not be empty.</p>
            )}
          </div>

          <div>
            <TextArea
              label="Describe your job"
              placeholder="Already have a job description? place it here!"
              className="mb-3"
              type="text"
              onChange={descriptionChangeHandler}
            />
            {descriptionHasError && (
              <p className="mt-3 error-msg">Description can not be empty.</p>
            )}
          </div>

          <div>
            <Input
              label="Add your project file"
              type="file"
              onChange={projectFileChangeHandler}
            />
            <h5 className="mt-3">Max file size: 100 MB</h5>

            {projectFileHasError && (
              <p className="mt-3 error-msg">Project file must be choose.</p>
            )}
          </div>
          <div className="text-end">
            <Button className="btn btn-registration btn-round" type="submit">
              Review
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Description;
