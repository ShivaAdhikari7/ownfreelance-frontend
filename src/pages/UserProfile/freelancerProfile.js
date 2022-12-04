import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
import Img from 'assets/images/web-development.jpg';
import axios from 'axios';
import { useEffect, useContext, useNavigate, useState } from 'react';
import { IoMdAddCircleOutline, } from 'react-icons/io';
import {TbEdit} from 'react-icons/tb';
import FreelancerRegistrationContext from 'context/FreelancerRegistration/freelancer-context';
import testimonials from 'assets/images/testimonial-1.jpg';
import Footer from 'components/Footer/Footer';

const FreelancerProfile=() =>{
    const[userdata, setUserdata] = useState('');
    const [profileDetail, setProfileDetail] = useState({});
    //const navigate = useNavigate();
  
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
          }
          .then(result=>{
            console.log(result);
            setUserdata(result.data.data);
        })
        .catch(e=>{
            console.log(e)
        })
        }
        
        );
  
        setProfileDetail(res.data[0]);
      };
     

      getProfileDetails();
      
    }, []);


    return(
        <>
        <Navbar/>
        <div className="container overflow-hidden main-page  d-flex flex-column align-items-center text-end border border-info rounded p -5">
        <div className="d-flex flex-row m-5 text-center border-bottom border-danger rounded  pb-5">
            <div className="profile-image">
                <img src={Img} alt='dp'className='rounded-circle'/>
                <p >{userdata.firstName}</p >
            </div>
            <div className='m-5'>
                <h1>Srishti Parajuli</h1>
                <p className="profile-description" >Kathmandu</p >
                <p className="profile-description" >Part Time</p >
                <p className="profile-description">{bio} I am a final year student with knowledge of Python, Java, JavaScipt.</p >
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
            <p className="profile-description">Softwarica College of IT & E-Commerce</p >
            <p  className='mb-5'>Bachelors in (Hons.) Computing</p >
        </div>
        <div className='me-5 ms-5 border-right-0 border-info'>
            <h1>Web developer</h1>
            <p className="profile-description">“I’m a developer with experience in building websites for small and medium sized businesses.<br></br> Whether you’re trying to win work, list your services or even create a whole online store – I can help!</p >

            <h1 className='mt-5'>Work history </h1>
            <p className="profile-description" >No expreience</p >

            <h1 className='mt-5'>Skills  <IoMdAddCircleOutline className="heart-icon" /> </h1>
            <p  className="profile-description">web app, mobile app, graphic designing</p >

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