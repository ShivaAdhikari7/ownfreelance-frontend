import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
import Img from 'assets/images/web-development.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { IoMdAddCircleOutline, } from 'react-icons/io';
import {TbEdit} from 'react-icons/tb';
import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';
import testimonials from 'assets/images/testimonial-1.jpg';
import Footer from 'components/Footer/Footer';

const FreelancerProfile=() =>{
    const [profileDetail, setProfileDetail] = useState(null);
    const [freelancerDetail, setFreelancerDetail] = useState(null);

    const navigate = useNavigate();
  
    const freelancerCtx = useContext(FreelancerRegistrationContext);
    const {
      profileUrl,
      bio,
      educationQualifications,
      hourlyRate,
      title,
      skills,
      workExperiences,
    } = freelancerCtx;
  
    useEffect(() => {
        const getProfileDetails = async () => {
          const res = await axios.get('http://localhost:90/user/me', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('__token__')}`,
            },
          });
    
          setProfileDetail(res.data.user);
          setFreelancerDetail(res.data.freelancer);

        };
    
        getProfileDetails();
      }, []);

      useEffect(() => {
        const getFreelancerDetails = async () => {
          const res = await axios.get('http://localhost:90/freelancer/', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('__token__')}`,
            },
          });
    
          setFreelancerDetail(res.data.freelancer);
          setFreelancerDetail(res.data.freelancer);

        };
    
        getFreelancerDetails();
      }, []);


    return(
        <>
        <Navbar/>
        <div className="container overflow-hidden main-page  d-flex flex-column align-items-center text-end border border-info rounded p -5">
        <div className="d-flex flex-row m-5 text-center border-bottom border-danger rounded  pb-5">
            <div className="profile-image">
                <img src={Img} alt='dp'className='rounded-circle'/>
                <p ></p >
            </div>
            <div className='m-5'>
                <h1>{profileDetail?.userId.firstName} {profileDetail?.userId.lastName} </h1>
                <p className="profile-description" >{profileDetail?.userId.email}</p >
                <p className="profile-description" >{`Kathmandu, ${profileDetail?.userId.country}`}</p >
                <p className="profile-description">{freelancerDetail?.bio} I am a student.</p >
            </div>
            <div className="form-action text-center m-5">
                <Button type="button" label="see public view" className="btn-round me-5 btn-submit p -3 w-100 "/>
            </div>
            <div className="form-action text-center m-5"><Button type="submit" label="Profile settings" className=" btn-round btn-submit  p -3  w-100"/></div>
        </div>

        <div className="d-flex flex-row ">
        <div className='border-left border-dark  rounded '>
            <h2 className='mb-3'>Video Introduction <IoMdAddCircleOutline className="heart-icon" /></h2>
            <h2 className='mb-3 mt-5'>Hours per week <TbEdit className="heart-icon" /></h2>
            <p className="profile-description">more than 30 hrs/week</p >

            <h2 className='mb-3 mt-5'>Languages  <IoMdAddCircleOutline className="heart-icon" />  <TbEdit className="heart-icon" /></h2>
            <p className="profile-description" >English: Fluent</p >
            <p className="profile-description" >Hindi: Fluent</p >
            <p className="profile-description">Nepali: Native or Bilingual</p >

            <h2 className='mb-3 mt-5'>Verification  <IoMdAddCircleOutline className="heart-icon" />   </h2>
            <p className="profile-description" >Military Veteran <TbEdit className="heart-icon" /></p >

            <h2 className='mb-3 mt-5'>Education  <IoMdAddCircleOutline className="heart-icon" /> </h2>
            <p className="profile-description"> {educationQualifications[0]?.schoolName}</p >
            <p  className='mb-5'>{educationQualifications[0]?.degree} |{' '}
                {educationQualifications[0]?.studyField}</p >
        </div>
        <div className='me-5 ms-5 border-right-0 border-info'>
            <h1>Web developer</h1>
            <p className="profile-description">“I’m a developer with experience in building websites for small and medium sized businesses.<br></br> Whether you’re trying to win work, list your services or even create a whole online store – I can help!</p >

            <h1 className='mt-5'>Work history </h1>
            <p className="profile-description" > {workExperiences[0]?.workTitle} |{' '}
                <span className="work-office">
                  {workExperiences[0]?.companyName}
                </span></p >

            <h1 className='mt-5'>Skills  <IoMdAddCircleOutline className="heart-icon" /> </h1>
            <p  className="profile-description"> {skills.map(skill => (
                <div className="col">
                  <span
                    className="skill w-100 text-center d-inline-block p-3"
                    key={skill.id}
                  >
                    {skill.label}
                  </span>
                </div>
              ))}</p >

            <h1 className='mt-5'>Your project catalog</h1>
            <p   className='mb-5 profile-description'>Projects are a new way to earn on Upwork that helps you do more of the work you love to do.<br></br> Create project offerings that highlight your strengths and attract more clients.</p >
        </div>
        </div>
        </div>

        {/* <div className="container overflow-hidden main-page  d-flex flex-column align-items-center text-end border border-info rounded p -5">
        {/* <div className="search-title d-flex align-items-center ">
                  <h1 href="#" className="search-link">
                    Testimonials<hr></hr><TbEdit className="heart-icon ms-5" />
                  </h1>
                  <img src={testimonials} alt="img"/>

                </div> */}

        {/* </div> */} 
        <br>
        </br>
        <Footer className="mt-5"/>
        </>

    );


}
export default FreelancerProfile;