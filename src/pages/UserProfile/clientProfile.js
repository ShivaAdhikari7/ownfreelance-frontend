import { Navigate, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Button from 'components/Button/Button';
import Img from 'assets/images/client4.jpg';
import Img1 from 'assets/images/daraz.png';
import Img3 from 'assets/images/client (2).png';
import I1 from 'assets/images/I1.png';
import I2 from 'assets/images/I2.png';
import I3 from 'assets/images/I3.png';
import I4 from 'assets/images/I4.png';
import I5 from 'assets/images/I5.png';
import I6 from 'assets/images/I6.png';
import I7 from 'assets/images/I7.png';


import Img2 from 'assets/images/cg-logo.png';
import ClientRegistrationContext from 'context/ClientRegistration/client-context';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';



const ClientProfile = () => {
  const navigate = useNavigate();

  const [profileDetail, setProfileDetail] = useState(null);
  const clientCtx = useContext(ClientRegistrationContext);
  const {
  } = clientCtx;

  useEffect(() => {
      const getProfileDetails = async () => {
        const res = await axios.get('http://localhost:90/user/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('__token__')}`,
          },
        });
  
        setProfileDetail(res.data.user);
        console.log(res.data.user);

      };
  
      getProfileDetails();
    }, []);

    const postNew =()=>{
      navigate('/add/client/headline')
    }
  return(
  profileDetail&&<>
          <Navbar/>
          <div >
          <div className='d-flex flex-row w-100 justify-content-center'>
            <img class="d-block w-75 m-5 " src={Img3} alt="slide"/>
            </div>

                    <div className="d-flex flex-row mt-2 w-75 justify-content-center pb-5">
                    <div className="d-flex flex-column justify-content-center ms-5 ps-3 ">
                    <h1>Your dashboard</h1><br></br>
                <h4>{profileDetail?.userId.firstName} {profileDetail?.userId.lastName}</h4>
                <p className="profile-description" >{profileDetail?.userId.email}</p >
                        
                    </div>            
                    <div className="form-action text-center m-5  ps-5">
                        <Button type="button"className="btn-round me-5 btn-submit p -3 w-100 ">Browse Project Catalog </Button>
                    </div>
                    <div className="form-action text-center m-5"><Button type="submit"  className="btn-round btn-submit p -3 w-100" onClick={postNew}>Post a new Job </Button></div>
                </div>        
            

        <div className="container overflow-hidden w-75 main-page mt-0  d-flex flex-row ">

        <div className='me-3 ms-3'>
          <div className="container overflow-hidden main-page  d-flex flex-column border border-$grey2-300 rounded ">
            <h1 className='pt-5'>Your drafts</h1> 
            <br></br>
            <br></br>
            <h3>Ui and Ux</h3>
            <p className='profile-description'>Saved 12 days ago</p>

          </div>
          <div className="container overflow-hidden main-page  d-flex flex-column border border-$grey2-300 rounded  mt-4">
            <h1 className='pt-5'>Your Postings</h1>
            {/* <h2>{profileDetail.headline}</h2>
            <h3>{profileDetail.description}</h3>
            <h3>{profileDetail.requiredJobTitle}</h3> */}

            {/* <p className='profile-description'></p> */} 

                    
                    <div>
                      <p className='profile-description'>{profileDetail.headline}</p>
                <p className='profile-description'>{profileDetail.description}</p>
                <p className='profile-description'>{profileDetail.requiredJobTitle}</p>  
                    </div>    
                        
          </div>
          <div className="container overflow-hidden main-page  d-flex flex-column border border-$grey2-300 rounded">
            <div className="container overflow-hidden main-page  d-flex flex-column border-bottom border-$grey2-300 rounded  mt-4">
            <h1 className='mt-3'>How to work with talent</h1>

            <div className='d-flex flex-row'>
            <img class="d-block w-5 m-3" src={I1} alt="Third slide"/>
            <div className='d-flex flex-column'>
            <h3 className='ps-5'>1. Post a job to the marketplace</h3>

            <p className='profile-description ps-5'> Provide enough detail for great talent to figure out if the work is right for them.<br></br>
        (You can always edit your post, or send an invite to reach out to people directly.)</p>
            </div>
            
        </div>
            </div>
            <div className='container overflow-hidden main-page  d-flex flex-column border-bottom border-$grey2-300 rounded'>
              
            <div className='d-flex flex-row'>
            <img class="d-block w-5 m-3" src={I2} alt="Third slide"/>
            <div className='d-flex flex-column'>
            <h3 className='ps-5'>2. Get proposals from talent</h3>
            <p className='profile-description ps-5'>A strong working relationship starts with open communication. Here’s your chance to ask about experience, set expectations for what you need, and discuss terms of the work.</p>
            </div>
            
        </div>
            
            </div>
            <div className='container overflow-hidden main-page  d-flex flex-column border-bottom border-$grey2-300 rounded'>
            <div className='d-flex flex-row'>
            <img class="d-block w-5 m-3" src={I3} alt="Third slide"/>
            <div className='d-flex flex-column'>
            
            <h3 className='ps-5'>3. Start working together</h3>
            <p className='profile-description ps-5'>Once you both agree on terms, collaborate with simple and secure tools like chat, file sharing, and time tracking.</p>
            </div>
        </div>
            
            </div>
            <div className='container overflow-hidden main-page  d-flex flex-column border-$grey2-300 rounded'>
            <div className='d-flex flex-row'>

            <img class="d-block w-5 m-3" src={I4} alt="Third slide"/>
            <div className='d-flex flex-column'>
            <h3 className='ps-5'>4. Pay for work you approve</h3>

        <p className='profile-description ps-5'>Reports are useful for keeping track of payments and reviewing work. As you complete jobs, you can build trusting relationships with talent in a way that helps you both grow.</p>
            </div>
          
        </div>
            
            </div>
          </div>
          </div>
        <div className='me-3 ms-3 w-50'>
            <div className='container overflow-hidden main-page  d-flex flex-column border border-$grey2-100 rounded mt-5'>
            <h1 className='ps-5 pt-4 font-weight-bolder'>Getting started</h1>
            <div className='container overflow-hidden main-page  d-flex flex-column border  border-$primary-tint-6 rounded mt-2'>
                <h2>Post a job</h2>
            </div>
            <div className='container overflow-hidden main-page  d-flex flex-column border border-$primary-tint-6 rounded mt-2'>
                <h2>Edit your job post</h2>
            </div>
            <div className='container overflow-hidden main-page  d-flex flex-column border border-$grey2-300 rounded mt-2'>
                <h2>Explore more talents</h2>
            </div>
            </div>
            <div className='container overflow-hidden main-page  d-flex flex-column border border-$grey2-300 rounded mt-4'>
            <h2 className='ps-5 pt-3'>Ready-to-buy projects</h2>
            <p className='profile-description ps-5 pt-4'>Know what you need but not<br></br> how to get it done? Buy a project priced and scoped<br></br> by a pro to start working right away.
        We think you might like help with</p>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active d-flex justify-content-center">
              <img class="d-block w-100 m-3 " src={Img} alt="First slide"/>
            </div>
          </div>
        </div>
            </div>

            </div>
            </div>
        </div>
  
      </>

  )
};

export default ClientProfile;
