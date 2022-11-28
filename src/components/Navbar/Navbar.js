import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg bg-custom navbar-custom`}>
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand py-1 mx-3">
          <h2 className="logo-text">OwnFreelance</h2>
        </NavLink>
        <button
          className="navbar-toggler mx-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto py-2 mx-3 text-center">
            {
              <li className="nav-item mx-3">
                <NavLink
                  to={'/login'}
                  className="nav-link nav-link-login my-2 px-3 py-3"
                >
                  Login
                </NavLink>
              </li>
            }

            {
              <li className="nav-item">
                <NavLink
                  to={'/signup'}
                  className={`nav-link custom-nav-link nav-link-signup my-2 px-3 py-3`}
                >
                  Sign Up
                </NavLink>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
