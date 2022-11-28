import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { BiLock } from "react-icons/bi";
import { BiFile } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Button from "components/Button/Button";
import Footer from "components/Footer/Footer";

import Navbar from "components/Navbar/Navbar";

import heroImage from "../../assets/images/hero-img.jpg";
import darazLogo from "../../assets/images/daraz.png";
import ncellLogo from "../../assets/images/ncell-logo.png";
import nabilBankLogo from "../../assets/images/nabil-bank.png";
import imperialLogo from "../../assets/images/imperial-logo.png";
import cgLogo from "../../assets/images/cg-logo.png";
import testimonialImage1 from "../../assets/images/sneha.jpg";

const HomePage = () => {
  const data = [
    {
      id: 1,
      // image: { testimonialImage1 },
      image: "/assets/images/sneha.jpg",
      name: "Sneha Sharma",
      title: "manager",
      quote:
        "It is extremely exciting that OwnFreelance has freelancersfrom all over the Nepal it broadens the talent pool and helps in developing country. One of the best things aboutOwnFreelance is that we can communicate in our native tongue.",
    },
    {
      id: 2,
      image: "/assets/images/james-gun.jpg",
      name: "James Gun",
      title: "Project Manager",
      quote:
        "It is extremely exciting that OwnFreelance has freelancersfrom all over the Nepal it broadens the talent pool and helps in developing country. One of the best things aboutOwnFreelance is that we can communicate in our native tongue.",
    },
    {
      id: 3,
      image: "/assets/images/michale.jpg",
      name: "Michael Mosely",
      title: "Product Manager",
      quote:
        "It is extremely exciting that OwnFreelance has freelancersfrom all over the Nepal it broadens the talent pool and helps in developing country. One of the best things aboutOwnFreelance is that we can communicate in our native tongue.",
    },
  ];
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/homepage");
  };
  return (
    <>
      <Navbar />
      <div className="section-hero ">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center hero">
            <div className="hero-description">
              <h1 className="hero-primary">
                Hire the most trusted freelancers in the industry
              </h1>

              <p className="hero-para">
                OwnFreelance platform provides the most experienced freelancers
                from Nepal where every freelancer is making dream a reality.
                Hire discuss and start.
              </p>
              <div className="btn-container d-flex">
                <Button
                  className="btn btn-get-started btn-round"
                  label="Get Started"
                />
                <Button
                  className="btn btn-explore btn-round"
                  label="Explore fields"
                />
              </div>
            </div>
            <div className="hero-image ">
              <img
                className="home_page_image"
                src={heroImage}
                alt="girl looking at the phone"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-customers d-flex justify-content-between align-items-center">
          <h3 className="heading-tertiary">Trusted By:</h3>
          <img className="customer-logo" src={ncellLogo} alt="Logo of Ncell" />
          <img
            className="customer-logo"
            src={nabilBankLogo}
            alt="Logo of Nabil Bank"
          />
          <img
            className="customer-logo"
            src={imperialLogo}
            alt="Logo of crowne imperial hotel"
          />
          <img
            className="customer-logo"
            src={cgLogo}
            alt="Logo of Chaudary Group"
          />
          <img className="customer-logo" src={darazLogo} alt="Logo of daraz" />
        </div>

        <div className="section-services">
          <h2 className="heading-secondary">Services on demand</h2>
          <div className="row">
            <div className="service-cards d-flex align-items-center justify-content-around">
              <div className="service-card service-card-1">
                <p>Make brand recognizable</p>
                <h3 className="service-title">Website Development</h3>
              </div>
              <div className="service-card service-card-2">
                <p>Market business digitally</p>
                <h3 className="service-title">Digital Marketing</h3>
              </div>
              <div className="service-card service-card-3">
                <p>Build the brand</p>
                <h3 className="service-title">Website design</h3>
              </div>
              <div className="service-card service-card-4">
                <p>More accountable business</p>
                <h3 className="service-title">Data Entry</h3>
              </div>
              {/* <span className="arrow-left arrow d-flex align-items-center justify-content-center">
                <IoIosArrowBack />
              </span>
              <span className="arrow-right arrow d-flex align-items-center justify-content-center">
                <IoIosArrowForward />
              </span> */}
            </div>
          </div>
        </div>

        <div className="section-workflow">
          <h2 className="heading-secondary">Efficient work flow</h2>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="workflow text-center">
              <div className="workflow-icon">
                <BiFile />
              </div>
              <p className="workflow-title">Post a job</p>
              <p className="workflow-description">
                Create your job postings and start recieving offers within
                minutes
              </p>
            </div>
            <div className="workflow text-center">
              <div className="workflow-icon">
                <GoPerson />
              </div>
              <p className="workflow-title">Hire Freelancers</p>
              <p className="workflow-description">
                Compare the offers recieved and choose the best fit for you.
              </p>
            </div>
            <div className="workflow text-center">
              <div className="workflow-icon">
                <GoChecklist />
              </div>
              <p className="workflow-title">Get the work done</p>
              <p className="workflow-description">
                Get your work done by continuous discussion and consistency
              </p>
            </div>
            <div className="workflow text-center">
              <div className="workflow-icon">
                <BiLock />
              </div>
              <p className="workflow-title">Secure payment</p>
              <p className="workflow-description">
                After finally completing the project make the payment securly
              </p>
            </div>
          </div>
        </div>
        <div className="section-testimonials">
          <h2 className="heading-secondary text-center">Happy Clients say</h2>
          <div className="row">
            <div className="testimonial-container ">
              {people.map((item, indexPeople) => {
                const { id, image, name, title, quote } = item;
                let position = "nextSlide";
                if (indexPeople === index) {
                  position = "activeSlide";
                }
                if (
                  indexPeople === index - 1 ||
                  (index === 0 && indexPeople === people.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <article className={position} key={id}>
                    <div className="testimonial-container d-flex justify-content-around">
                      <img
                        src={testimonialImage1}
                        alt="Sneha Sharma founder of PustakBhandar"
                        className="testimonial-image"
                      />

                      <div className="testimonial-content  d-flex flex-column ">
                        <div className="testimonial-author">
                          {name} | <span>{title}</span>
                        </div>
                        <p className="testimonial">{quote}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
              {/* <img
                src={testimonialImage1}
                alt="Sneha Sharma founder of PustakBhandar"
                className="testimonial-image"
              />

              <div className="testimonial-content  d-flex flex-column ">
                <div className="testimonial-author">
                  Sneha Sharma | <span>PustakBhandar</span>
                </div>
                <p className="testimonial">
                  "It is extremely exciting that OwnFreelance has freelancers
                  from all over the Nepal it broadens the talent pool and helps
                  in developing country. One of the best things about
                  OwnFreelance is that we can communicate in our native tongue."
                </p>
              </div> */}
              <span className="testimonial-arrow-left arrow d-flex align-items-center justify-content-center">
                <IoIosArrowBack />
              </span>
              <span className="testimonial-arrow-right arrow d-flex align-items-center justify-content-center">
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
