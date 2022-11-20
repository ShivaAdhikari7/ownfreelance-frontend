import RegistrationNavbar from "components/Navbar/Navbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Scope = () => {
  const navigate = useNavigate();

  const navigateToBudget = () => {
    navigate('/add/client/budget');
  };
  return (
<>
      <Navbar/>
      <div className="container w-50 add-skills-page">
      <h5 className="headline-color" >3/4 Scope</h5>

        <h3 className="page-title mb-5">
        Next, estimate the scope of your work.
        </h3>
        <p className="page-description mb-5">
        Consider the size of your project and the time it will take.
        </p>
        <div>  
        <div className="mt-5">
      <h4>What is the size of your project?</h4>
     </div>     
      <div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 <h5 class="form-check-label" for="flexRadioDefault1">
   Large
 </h5>
 <label>Longer term or complex initiatives (ex. design and build a full website)</label>
  </div>
<div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <h5 class="form-check-label" for="flexRadioDefault2">
         Medium
  </h5>
   <label>Well-defined projects (ex. a landing page)</label>  
 </div>
 <div class="form-check mt-4">
   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <h5 class="form-check-label" for="flexRadioDefault2">
     Small
   </h5>
  <label>Quick and straightforward tasks (ex. update text and images on a webpage)</label>
   </div>              
     </div>
     <div className="mt-5">
      <h4>How long will your work take?</h4>
     </div>
           
      <div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 <h5 class="form-check-label" for="flexRadioDefault1">
   more than 6 months
 </h5>
  </div>
<div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <h5 class="form-check-label" for="flexRadioDefault2">
         3 to 6 months
  </h5>
 </div>
 <div class="form-check mt-4">
   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <h5 class="form-check-label" for="flexRadioDefault2">
     1 to 3 months
   </h5>
   </div>  

   <div className="mt-5">
      <h4>What level of experience will it need?</h4>
     </div>
        
      <div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 <h5 class="form-check-label" for="flexRadioDefault1">
   Entry level
 </h5>
 <label>Looking for someone relatively new to this field</label>
  </div>
<div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <h5 class="form-check-label" for="flexRadioDefault2">
         Intermediate level
  </h5>
   <label>Looking for substantial experience in this field</label>  
 </div>
 <div class="form-check mt-4">
   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <h5 class="form-check-label" for="flexRadioDefault2">
     Expert level
   </h5>
  <label>Looking for comprehensive and deep expertise in this field</label>
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
