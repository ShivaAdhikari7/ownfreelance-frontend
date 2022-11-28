import { useContext, useState } from 'react';

import Navbar from 'components/Navbar/Navbar';
import TextArea from 'components/TextArea/TextArea';
import Button from 'components/Button/Button';

import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';
import { useNavigate } from 'react-router-dom';

const BioAdd = () => {
  const freelancerCtx = useContext(FreelancerRegistrationContext);
  const navigate = useNavigate();

  const [bio, setBio] = useState('');

  const [bioHasError, setBioHasError] = useState(false);

  const formIsInvalid = bio.trim().length === 0;

  const bioChangeHandler = e => {
    setBioHasError(e.target.value.trim().length === 0);
    setBio(e.target.value);
  };

  const bioFormSubmitHandler = e => {
    e.preventDefault();

    if (bio.trim().length === 0) setBioHasError(true);

    if (formIsInvalid) return;

    freelancerCtx.setBio(bio);

    navigate('/add/rate');
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 add-bio-page">
        <h3 className="page-title mb-5">
          Add your freelance bio to tell the world about yourself.
        </h3>
        <p className="page-description mb-5">
          Help people get to know you better with your introduction and
          achievements by writing the eye catching bio.
        </p>
        <form onSubmit={bioFormSubmitHandler}>
          <div>
            <TextArea
              onChange={bioChangeHandler}
              className="mb-5"
              type="text"
              placeholder="Describe your top skills, experiences and interests."
            />
            {bioHasError && (
              <p className="mt-3 error-msg">Bio can not be empty.</p>
            )}
          </div>
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

export default BioAdd;
