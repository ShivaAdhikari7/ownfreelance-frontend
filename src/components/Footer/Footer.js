import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container py-5">
      <div className="container my-5">
        <div className="footer d-flex  justify-content-between">
          <div className="footer_links-container">
            <h3 className="mb-5">Categories</h3>
            <ul className="footer_links p-0">
              <li>
                <NavLink to="/">Programming & Tech</NavLink>
              </li>
              <li>
                <NavLink to="/">Design & creativity</NavLink>
              </li>
              <li>
                <NavLink to="/">Sales & Marketing</NavLink>
              </li>
              <li>
                <NavLink to="/">Data Entry</NavLink>
              </li>
              <li>
                <NavLink to="/">Business</NavLink>
              </li>
              <li>
                <NavLink to="/">Digital Marketing</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_links-container">
            <h3 className="mb-5">About</h3>
            <ul className="footer_links p-0">
              <li>
                <NavLink to="/">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/">Press & News</NavLink>
              </li>
              <li>
                <NavLink to="/">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/">Terms of service</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_links-container">
            <h3 className="mb-5">Support</h3>
            <ul className="footer_links p-0">
              <li>
                <NavLink to="/">Help & Support</NavLink>
              </li>
              <li>
                <NavLink to="/">Trust & safety</NavLink>
              </li>
              <li>
                <NavLink to="/">Selling on ownFreelance</NavLink>
              </li>
              <li>
                <NavLink to="/">Buying on ownFreelance</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_links-container">
            <h3 className="mb-5">Programs</h3>
            <ul className="footer_links p-0">
              <li>
                <NavLink to="/">Events</NavLink>
              </li>
              <li>
                <NavLink to="/">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/">Forums</NavLink>
              </li>
              <li>
                <NavLink to="/">Podcasts</NavLink>
              </li>
              <li>
                <NavLink to="/">Become NavLink seller</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center footer_text">
          Copyright &copy; 2022 ownFreelance Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
