import RegistrationNavbar from "components/Navbar/Navbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
const Headline = () => {
  return (
    <div>
      <RegistrationNavbar />
      <div className="container w-50 add-skills-page" id="headline-flex">
      <div>
        <h5 className="headline-color" >1/4 Headline</h5>
        <h1 className="page-title mb-3">Lets Start with a Strong Headline</h1>
        <h5 className="mb-5">This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!</h5>
      </div>

      <div >       
        <Input className="page-description mb-5"
                  label="Write a headline for your job post" type="text" name="studyfield"
                  
                />
        <h2>Example Titles</h2> 
        <h4 ><ul className="mt-3">
            <li>- Build responsive WordPress site with booking/payment functionality</li>
            <li>- Graphic designer needed to design ad creative for multiple campaigns</li>
            <li>- Facebook ad specialist needed for product launch</li>
                    
                
        </ul>    </h4>   
        
      </div>
      <div className="text-end mb-4 ">
          <Button
            className="btn btn-registration btn-round"
            label="Next"
          />
        </div>
      </div>
      

      </div>
  );
};

export default Headline;
