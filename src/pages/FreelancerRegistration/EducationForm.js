import RegistrationNavbar from "components/Navbar/RegistrationNavbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
const EducationForm = () => {
  return (
    <div>
      <RegistrationNavbar />

      <div className="container overflow-hidden section-experience">
        <h1 className="main-heading-experience">Add Education History:</h1>
        <div className="row experience-form-row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div className="experience-form ">
            <form>
              <div className="experience-form-controls w-75 m-auto d-flex flex-column">
                <Input
                  id="college"
                  label="College"
                  type="text"
                  placeholder="Ex: Softwarica College"
                  name="college"
                />

                <Input
                  id="degree"
                  label="Degree"
                  type="text"
                  placeholder="Ex: Bachelors"
                  name="degree"
                />

                <Input
                  id="studyfileld"
                  label="Field of Study"
                  type="text"
                  placeholder="Ex: Information Technology"
                  name="studyfield"
                />

                <Input
                  id="description"
                  label="Description:"
                  type="text"
                  placeholder="Describe your studies, awards, etc"
                  name="description"
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

export default EducationForm;
