import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
import TextArea from "components/TextArea/TextArea";
const Description = () => {

  return (
    <>
      <Navbar />
      <div className="container w-50 add-skills-page">
        <h3 className="page-title mb-5">
        Last step, start the conversation
        </h3>
        <h2>Talent are looking for:</h2> 
       <ul className="mt-3">
           <h6 className="mt-3">- Clear expectations about your task or deliverables</h6>
           <h6 className="mt-3">- The skills required for your work</h6>
            <h6 className="mt-3">- Good communication</h6>
            <h6 className="mt-3">- Details about how you or your team like to work</h6>             
        </ul>  
        <form >
        <Input
            label="Add a title"
            className="mb-5"
            type="text"           
          />

         <TextArea
         label={"Describe your job"}
         className="mb-5"
         type="text"
         />
         
        </form>
        <div className="text-end">
          <Button
            className="btn btn-registration btn-round"
            type="submit"
            label="Review"
          />
        </div>
      </div>
    </>
  );
};

export default Description;
