import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoMdPaperPlane } from 'react-icons/io';
import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';

import userIcon from 'assets/images/user-icon.png';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('__token__');

  const [displayUserModal, setDisplayUserModal] = useState(false);

  const userModalToggleHandler = () => {
    setDisplayUserModal(prevState => !prevState);
  };

  return (
    <nav className="py-3 navbar navbar-expand-lg bg-custom navbar-custom">
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
          {isLoggedIn && (
            <ul className="navbar-nav ms-5 dropdown-nav">
              <li className="btn-group me-5">
                <button
                  className="background-transparent dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jobs
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none mb-3"
                      to="/"
                    >
                      My Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none mb-3"
                      to="/"
                    >
                      All Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none"
                      to="/"
                    >
                      Post a job
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="btn-group me-5">
                <button
                  className="background-transparent dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Talents
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none mb-3"
                      to="/"
                    >
                      Discover Talents
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none mb-3"
                      to="/"
                    >
                      Search Talents
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none"
                      to="/"
                    >
                      Saved Talents
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="text-decoration-none nav-link-msg" to="/">
                  Messages
                </NavLink>
              </li>
            </ul>
          )}
          <ul className="navbar-nav ms-auto py-2 mx-3 text-center">
            {isLoggedIn && (
              <>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/search"
                    className="nav-link nav-link-login my-2 px-3 py-3 nav-icon"
                  >
                    <BiSearch />
                  </NavLink>
                </li>

                <li className="nav-item mx-3">
                  <NavLink
                    to="/login"
                    className="nav-link nav-link-login my-2 px-3 py-3 nav-icon"
                  >
                    <IoMdNotificationsOutline />
                  </NavLink>
                </li>

                <li className="nav-item mx-3">
                  <NavLink
                    to="/login"
                    className="nav-link nav-link-login my-2 px-3 py-3 nav-icon"
                  >
                    <IoMdPaperPlane />
                  </NavLink>
                </li>

                <li className="nav-item mx-3 position-relative">
                  <Button
                    onClick={userModalToggleHandler}
                    className="nav-link nav-link-login my-2 px-3 py-3 nav-icon user-btn"
                  >
                    <BiUserCircle />

                    <div
                      className={`d-flex flex-column align-items-center user-info-box py-5 px-5 position-absolute ${
                        displayUserModal ? '' : 'hidden'
                      }`}
                    >
                      <img
                        src={userIcon}
                        alt="User Icon"
                        width="75"
                        height="75"
                      />

                      <div className="user-info d-flex flex-column align-items-center mb-3">
                        <span className="user-name">Dikshak Poudel</span>
                        <span className="user-type">
                          {localStorage.getItem('userType')}
                        </span>
                      </div>

                      <div className="controls d-flex flex-column align-self-start">
                        <NavLink
                          to="/"
                          className="d-flex align-items-center justify-content-between text-decoration-none"
                        >
                          <BiLogOut />
                          Logout
                        </NavLink>

                        <NavLink
                          to="/"
                          className="d-flex align-items-center justify-content-between text-decoration-none"
                        >
                          <MdSettings />
                          Settings
                        </NavLink>
                      </div>
                    </div>
                  </Button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li className="nav-item mx-3">
                <NavLink
                  to={'/login'}
                  className="nav-link nav-link-login my-2 px-3 py-3"
                >
                  Login
                </NavLink>
              </li>
            )}

            {!isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to={'/signup'}
                  className={`nav-link custom-nav-link nav-link-signup my-2 px-3 py-3`}
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
