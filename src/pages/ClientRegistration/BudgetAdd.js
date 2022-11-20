import Navbar from "components/Navbar/Navbar";
import Input from "components/Input/Input";
import Button from 'components/Button/Button';
import { useNavigate } from "react-router-dom";

const Budget = () => {
    const navigate = useNavigate();

    const navigateToDescription = () => {
      navigate('/add/client/description');
    };
    return(
        <>
      <Navbar/>
      <div className="container w-50 add-skills-page ">
      <h5 className="headline-color mt-5" >4/4 Budget</h5>
        <h1 className="page-title mb-2 mt-4">Tell us about your budget</h1>
        <h4 className=" mt-3">
        This will help us match you to talent within your range.
        </h4>
        <form className="mt-5" >
          <Input
            label="Enter an hourly rate:"
            className="mb-2"
            type="text"
            placeholder="$0.00"
          />
          <p className="mb-5">Professionals tend to charge $30 - $50/hour (USD) for projects like yours.</p>
          <div >             
          </div>
        </form>
        <div className="text-end">
          <Button
          onClick={navigateToDescription}
            className="btn btn-registration btn-round"
            label="Next"
          />
        </div>
      </div>
    </>

    )


}
export default Budget;