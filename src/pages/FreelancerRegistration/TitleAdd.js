import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';

const TitleAdd = () => {
  const navigate = useNavigate();
  const freelancerCtx = useContext(FreelancerRegistrationContext);

  const [title, setTitle] = useState('');

  const [titleHasError, setTitleHasError] = useState(false);

  const formIsInvalid = title.trim().length === 0;

  const titleChangeHandler = e => {
    setTitleHasError(e.target.value.trim().length === 0);
    setTitle(e.target.value);
  };

  const titleFormSubmitHandler = e => {
    e.preventDefault();

    if (title.trim().length === 0) setTitleHasError(true);

    if (formIsInvalid) return;

    freelancerCtx.setTitle(title);

    navigate('/add/work/experience');
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 add-title-page">
        <h3 className="page-title mb-5">
          Add your freelance title to tell the world what you do.
        </h3>
        <p className="page-description mb-5">
          Clients tend to hire according to the title they see. So, make it
          stand out in the eye of client.
        </p>
        <form onSubmit={titleFormSubmitHandler}>
          <div>
            <Input
              onChange={titleChangeHandler}
              className="mb-2"
              type="text"
              placeholder="Example: Full stack developer | React developer"
            />
            {
              <p className="error-msg">
                {titleHasError && 'Title can not be empty.'}
              </p>
            }
          </div>
          <div className="text-end mt-5">
            <Button type="submit" className="btn btn-registration btn-round">
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TitleAdd;
