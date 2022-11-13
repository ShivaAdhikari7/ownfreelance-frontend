import RegistrationNavbar from "components/Navbar/RegistrationNavbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
const FreelancerPreferences = () => {
  return (
    <div>
      <RegistrationNavbar />

      <div className="container overflow-hidden section-experience">
        <h1 className="main-heading-experience">Add your Preferences here:</h1>
        <div className="row experience-form-row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div className="experience-form ">
            <form>
              <div className="experience-form-controls w-75 m-auto d-flex flex-column">
                <Input
                  id="language"
                  label="Add your Prefered language:"
                  type="text"
                  placeholder="Ex: English"
                  name="language"
                />

                <Input
                  id="service"
                  label="Main Service you offer:"
                  type="text"
                  placeholder="Ex: Web developement"
                  name="service"
                />

                <Input
                  id="number"
                  label="Your phone Number:"
                  type="text"
                  placeholder="Ex: 98......."
                  name="service"
                />

                <Input
                  id="rate"
                  label="Set your rate($/hr)"
                  type="text"
                  placeholder="$20"
                  name="rate"
                />
                <Input
                  id="ownfreelanceservice"
                  label="OwnFreelance Service ($/hr)"
                  type="text"
                  placeholder="-$4"
                  name="ownfreelanceservice"
                />

                <Input
                  id="recieve"
                  label="You will recieve($/hr)"
                  type="text"
                  placeholder="$16"
                  name="recieve"
                />

                <Input
                  id="bio"
                  label="Write your bio:"
                  type="text"
                  placeholder="I am ....."
                  name="bio"
                />
                <Input
                  id="picture"
                  label="Add your profile photo:"
                  type="file"
                  name="picture"
                />
              </div>

              <div className="form-action text-center form-btn">
                <Button
                  className="btn-round btn-submit"
                  type="submit"
                  label="Next"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerPreferences;
