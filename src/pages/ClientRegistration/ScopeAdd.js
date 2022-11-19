import RegistrationNavbar from "components/Navbar/Navbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
const Scope = () => {
  return (

//       <div>       
//       <div class="form-check">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
//   <label class="form-check-label" for="flexRadioDefault1">
//     Large
//   </label>
//   <h5>Longer term or complex initiatives (ex. design and build a full website)</h5>
// </div>
// <div class="form-check">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
//   <label class="form-check-label" for="flexRadioDefault2">
//     Medium
//   </label>
//   <h5>Well-defined projects (ex. a landing page)</h5>  
// </div>
// <div class="form-check">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
//   <label class="form-check-label" for="flexRadioDefault2">
//     Small
//   </label>
//   <h5>Quick and straightforward tasks (ex. update text and images on a webpage)</h5>
// </div>
                      
        
//       </div>
//       </div>

//       </div>
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

        <div className="text-end">
          <Button
          //onClick={navigateToScope}
            className="btn btn-registration btn-round"
            label="Next"
          />
        </div>
      </div>
    </>
  );
};

export default Scope;
