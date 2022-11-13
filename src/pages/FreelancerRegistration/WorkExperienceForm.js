import RegistrationNavbar from "components/Navbar/RegistrationNavbar";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
const WorkExperience = () => {
  return (
    <div>
      <RegistrationNavbar />

      <div className="container overflow-hidden section-experience">
        <h1 className="main-heading-experience">Add work experince:</h1>
        <div className="row experience-form-row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-5 gy-5">
          <div className="experience-form ">
            <form>
              <div className="experience-form-controls w-75 m-auto d-flex flex-column">
                <Input
                  id="title"
                  label="Title"
                  type="text"
                  placeholder="Enter the title of job"
                  name="title"
                />

                <Input
                  id="company"
                  label="Company Name"
                  type="text"
                  placeholder="Enter company name"
                  name="company"
                />

                <Input
                  id="location"
                  label="Location"
                  type="text"
                  placeholder="Enter company location"
                  name="location"
                />

                <Input
                  id="description"
                  label="Description:"
                  type="text"
                  placeholder="Enter job description"
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

export default WorkExperience;
