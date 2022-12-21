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
    useEffect(() => {
        const getProfileDetails = async () => {
          const res = await axios.get('http://localhost:90/user/me', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('__token__')}`,
            },
          }          
          );
    
          setProfileDetail(res.data.user);
          console.log(res.data.user);
        };
    
        getProfileDetails();
      }, []);
    return(
        <>
        <Navbar/>
        
        <div className="container overflow-hidden main-page border border-$grey2-100 rounded p -5">
        <div className="search-title align-items-center ">
                  <h1 className='page-title mt-5'>Better market your expertise with specialized profiles</h1><br></br>
                  <p className='profile-description mt-5'>Specialized profiles allow you to display more specific skills, deliverables, and more – and help power better search results and job recommendations. Learn more</p>
                  <div className="form-action text-center m-5">
                <Button type="button" label="Create a Specialized Profile" className="btn-round me-5 btn-submit p -3 w-50 align-items-right justify-items-right"/>
            </div>
                 
                </div> 
                

        </div> 
        <div className="container overflow-hidden main-page  d-flex flex-column align-items-center border border-$grey2-100 rounded p -5">
        <div className="d-flex flex-row mt-5 border-bottom border-$grey2-100 rounded  pb-5">
            <div className="d-flex flex-row w-50 ms-5 ps-3 ">
                <img src={Img} alt='dp' className='rounded-circle me-5 ms-5' id='profile-circle'/>
                <div className='mt-4 pt-5 pe-5'>
                <h1>{profileDetail?.userId.firstName} {profileDetail?.userId.lastName} </h1>
                <p className="profile-description" >{profileDetail?.userId.email}</p >
                <p className="profile-description" >{` ${profileDetail?.userId.country}`}</p >
                <p className="profile-description">{profileDetail?.preferences.phoneNumber}</p >

                </div>
            </div>            
            <div className="form-action text-center m-5 pt-5 ps-5">
                <Button type="button" label="Public View" className="btn-round me-5 btn-submit p -3 w-100 "/>
            </div>
            <div className="form-action text-center m-5 pt-5"><Button type="submit" label="Profile Settings" className="btn-round btn-submit p -3 w-100"/></div>
        </div>

        <div className="d-flex flex-row ">
        <div className='border-left border-dark me-5 pe-5 rounded '>
            <h2 className='mb-3 mt-5'>Rate per hour <TbEdit className="heart-icon" /></h2>
            <p className="profile-description">{profileDetail?.hourlyRate}$ </p >

            <h2 className='mb-3 mt-5'>Languages  <IoMdAddCircleOutline className="heart-icon" />  <TbEdit className="heart-icon" /></h2>
            <p className="profile-description" >{profileDetail?.preferences.language} </p >
            <h2 className='mb-3 mt-5'>Education  <IoMdAddCircleOutline className="heart-icon" /> </h2>
            <p className="profile-description"> {profileDetail?.educationDetails[0].schoolName}</p >
            <p  className='mb-5'>{profileDetail?.educationDetails[0].degree} |{' '}
            {profileDetail?.educationDetails[0].studyField}</p >
        </div>
        <div className='me-5 ms-5 ps-5 border-right border-success '>
            {/* <h1>{profileDetail.jobTitle}</h1> */}
            <p className="profile-description">{profileDetail?.bio}</p >

<br className='border-bottom border-success'></br>
            <h1 className='mt-5'>Work history </h1>
            <p className="profile-description" >{profileDetail?.workExperiences[0].workTitle}  |{' '}
            {profileDetail?.workExperiences[0].companyName} | {' '}
            {profileDetail?.workExperiences[0].companyCity} | {' '}
            {profileDetail?.workExperiences[0].companyCountry}| {' '}
            {profileDetail?.workExperiences[0].workStartDate} | {' '} {profileDetail?.workExperiences[0].workEndDate}
                <span className="work-office">
                  
                </span></p >

            <h1 className='mt-5'>Skills  <IoMdAddCircleOutline className="heart-icon" /> </h1>
            {/* <h4>{profileDetail.map(skill => (
                <div className="col">
                  <span
                    className="skill w-100 text-center d-inline-block p-3"
                    key={skill.id}
                  >
                    {skill.label}
                  </span>
                </div>
              ))} */}
{/* </h4> */}
           

            <h1 className='mt-5'>Your project catalog</h1>
            <p   className='mb-5 profile-description'>Projects are a new way to earn on Upwork that helps you do more of the work you love to do.<br></br> Create project offerings that highlight your strengths and attract more clients.</p >
        </div>
        </div>
        </div>

        <div className="container overflow-hidden main-page  d-flex flex-column align-items-left text-end border border-$grey2-100 rounded p -5">
        <div className="search-title d-flex align-items-center ">
                  <h1 href="#" className="search-link ms-3 me-5">
                    Testimonials<TbEdit className="heart-icon ms-5" />
                  </h1>
                  {/* <img src={testimonials} alt="img"/> */}
                </div> 
                

        </div> 
        <br>
        </br>
        {/* <Footer className="mt-5"/> */}
        </>

    );


}
export default FreelancerProfile;