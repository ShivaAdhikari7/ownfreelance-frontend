import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Button from 'components/Button/Button';
import Img from 'assets/images/client.png';
import Img1 from 'assets/images/daraz.png';
import Img2 from 'assets/images/cg-logo.png';



const ClientProfile = () => {

  return <>
  <div className="container overflow-hidden main-page  d-flex flex-column">

        <h1>Your dashboard</h1>
        <h4>Srishti Parajuli</h4>
    </div>

<div className="container overflow-hidden main-page  d-flex flex-row ">

<div className='me-5 ms-5'>
  <div className="container overflow-hidden main-page  d-flex flex-column border border-success rounded ">
    <h1>Your drafts</h1>
    <br></br>
    <br></br>
    <h3>Ui and Ux</h3>
    <p className='profile-description'>Saved 12 days ago</p>

  </div>
  <div className="container overflow-hidden main-page  d-flex flex-column border border-success rounded  mt-4">
    <h1>Your Postings</h1>

  </div>
  <div className="container overflow-hidden main-page  d-flex flex-column border border-success rounded  mt-4">
    <div className="container overflow-hidden main-page  d-flex flex-column border-bottom border-success rounded  mt-4">
    <h1 className='mt-3'>How to work with talent</h1>
    <h3 className='ps-5'>1. Post a job to the marketplace</h3>
    <p className='profile-description ps-5'>Provide enough detail for great talent to figure out if the work is right for them.<br></br>
(You can always edit your post, or send an invite to reach out to people directly.)</p>
    </div>
    <div className='container overflow-hidden main-page  d-flex flex-column border-bottom border-success rounded'>
    <h3 className='ps-5'>2. Get proposals from talent</h3>
    <p className='profile-description ps-5'>A strong working relationship starts with open communication. Here’s your chance to ask about experience, set expectations for what you need, and discuss terms of the work.</p>
    </div>
    <div className='container overflow-hidden main-page  d-flex flex-column border-bottom border-success rounded'>
    <h3 className='ps-5'>3. Start working together</h3>
    <p className='profile-description ps-5'>Once you both agree on terms, collaborate with simple and secure tools like chat, file sharing, and time tracking.</p>
    </div>
    <div className='container overflow-hidden main-page  d-flex flex-column border-success rounded'>
    <h3 className='ps-5'>4. Pay for work you approve</h3>
    <p className='profile-description ps-5'>Reports are useful for keeping track of payments and reviewing work. As you complete jobs, you can build trusting relationships with talent in a way that helps you both grow.</p>
    </div>
  </div>
  </div>
<div className='me-5 ms-5 mt-5'>
    <div className='container overflow-hidden main-page  d-flex flex-column border border-success rounded mt-5'>
    <h3 className='ps-5'>Getting started</h3>
    <div className='container overflow-hidden main-page  d-flex flex-column border border-success rounded mt-5'>
        <h1>Post a job</h1>
    </div>
    <div className='container overflow-hidden main-page  d-flex flex-column border border-success rounded mt-5'>
        <h1>Edit your job post</h1>
    </div>
    <div className='container overflow-hidden main-page  d-flex flex-column border border-success rounded mt-5'>
        <h1>Explore more talent</h1>
    </div>
    </div>
    <div className='container overflow-hidden main-page  d-flex flex-column border border-success rounded mt-4'>
    <h3 className='ps-5 pt-3'>Ready-to-buy projects</h3>
    <p className='profile-description ps-5 pt-4'>Know what you need but not<br></br> how to get it done? Buy a project priced and scoped<br></br> by a pro to start working right away.
We think you might like help with</p>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Img} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Img1} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Img2} alt="Third slide"/>
    </div>
  </div>
</div>
    </div>

    </div>
    </div>

  
  </>

  
};

export default ClientProfile;
