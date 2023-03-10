import { useState, useContext } from 'react';

import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

import ClientRegistrationContext from 'context/ClientRegistration/client-context';

const Budget = () => {
  const navigate = useNavigate();
  const clientCtx = useContext(ClientRegistrationContext);

  const [budget, setBudget] = useState('');

  const [budgetHasError, setBudgetHasError] = useState('');

  const formIsInvalid = budget.trim().length === 0;

  const budgetSubmitHandler = e => {
    e.preventDefault();

    if (budget.trim().length === 0) setBudgetHasError(true);

    if (formIsInvalid) return;

    clientCtx.setBudget(budget);

    navigate('/add/client/description');
  };

  const budgetChangeHandler = e => {
    setBudgetHasError(e.target.value.trim().length === 0);
    setBudget(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container w-50 add-skills-page ">
        <h5 className="headline-color mt-5">4/4 Budget</h5>
        <h1 className="page-title mb-2 mt-4">Tell us about your budget</h1>
        <h4 className=" mt-3">
          This will help us match you to talent within your range.
        </h4>
        <form onSubmit={budgetSubmitHandler} className="mt-5">
          <div>
            <Input
              label="Enter an hourly rate:"
              className="mb-2"
              type="text"
              placeholder="$0.00"
              onChange={budgetChangeHandler}
            />
            {budgetHasError && (
              <p className="mt-3 error-msg">Budget must be choose.</p>
            )}
          </div>
          <p className="my-3 client-msg">
            Professionals tend to charge $30 - $50/hour (USD) for projects like
            yours.
          </p>
          <div className="text-end">
            <Button type="submit" className="btn btn-registration btn-round">
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Budget;
