import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';

import ClientRegistrationContext from 'context/ClientRegistration/client-context';

const Headline = () => {
  const navigate = useNavigate();
  const clientCtx = useContext(ClientRegistrationContext);

  const [headline, setHeadline] = useState('');

  const headlineChangeHandler = e => {
    setHeadline(e.target.value);
  };

  const submitHeadline = e => {
    e.preventDefault();

    clientCtx.setHeadline(headline);
    navigate('/add/client/skills');
  };
  return (
    <>
      <Navbar />
      <div className="container w-50 add-skills-page">
        <h5 className="headline-color">1/4 Headline</h5>

        <h3 className="page-title mb-5">Lets Start with a Strong Headline</h3>
        <p className="page-description mb-5">
          This helps your job post stand out to the right candidates. It's the
          first thing they'll see, so make it count!
        </p>
        <form onSubmit={submitHeadline}>
          <Input
            label="Write a headline for your job post:"
            className="mb-5"
            type="text"
            placeholder="Write job headline"
            onChange={headlineChangeHandler}
          />
          <div>
            <h2>Example Titles</h2>
            <ul className="d-flex flex-column mt-3 example-titles-list p-0">
              <li>
                - Build responsive WordPress site with booking/payment
                functionality
              </li>
              <li>
                - Graphic designer needed to design ad creative for multiple
                campaigns
              </li>
              <li>- Facebook ad specialist needed for product launch</li>
            </ul>
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

export default Headline;
