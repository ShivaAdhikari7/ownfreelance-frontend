import RegistrationNavbar from "components/Navbar/Navbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
const Scope = () => {
  return (
    <div>
      <RegistrationNavbar />
      <div id="headline">
      <div>
        <h5>3/4 Scope</h5>
        <h1>Next, estimate the scope of your work.</h1>
        <h5>Consider the size of your project and the time it will take.</h5>
      </div>

      <div>       
      <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Large
  </label>
  <h5>Longer term or complex initiatives (ex. design and build a full website)</h5>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Medium
  </label>
  <h5>Well-defined projects (ex. a landing page)</h5>  
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Small
  </label>
  <h5>Quick and straightforward tasks (ex. update text and images on a webpage)</h5>
</div>
                      
        
      </div>
      </div>

      </div>
  );
};

export default Scope;
