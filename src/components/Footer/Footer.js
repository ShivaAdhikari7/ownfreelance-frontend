const Footer = () => {
  return (
    <>
      <div className="row">
        <div className=" footer d-flex  justify-content-between">
          <div className="footer_links-container">
            <h3 className="text-center">Categories</h3>
            <ul className="footer_links ">
              <li>
                <a href="#">Programming & Tech</a>
              </li>
              <li>
                <a href="#">Design & creativity</a>
              </li>
              <li>
                <a href="#">Sales & Marketing</a>
              </li>
              <li>
                <a href="#">Data Entry</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
            </ul>
          </div>
          <div className="footer_links-container">
            <h3 className="footer_about">About</h3>
            <ul className="footer_links">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press & News</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
            </ul>
          </div>
          <div className="footer_links-container">
            <h3 className="footer_support">Support</h3>
            <ul className="footer_links">
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Trust & safety</a>
              </li>
              <li>
                <a href="#">Selling on ownFreelance</a>
              </li>
              <li>
                <a href="#">Buying on ownFreelance</a>
              </li>
            </ul>
          </div>
          <div className="footer_links-container">
            <h3>Programs</h3>
            <ul className="footer_links">
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Podcasts</a>
              </li>
              <li>
                <a href="#">Become a seller</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center footer_text">
          Copyright &copy; 2022 ownFreelance Ltd. All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
