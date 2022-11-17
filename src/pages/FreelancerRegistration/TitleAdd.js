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

  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };

  const titleFormSubmitHandler = e => {
    e.preventDefault();

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
          <Input
            onChange={titleChangeHandler}
            className="mb-5"
            type="text"
            placeholder="Example: Full stack developer | React developer"
          />
          <div className="text-end">
            <Button
              type="submit"
              className="btn btn-registration btn-round"
              label="Next"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default TitleAdd;
