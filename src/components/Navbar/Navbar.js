import { useState, useEffect, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoMdPaperPlane } from 'react-icons/io';
import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';

import axios from 'axios';

import userIcon from 'assets/images/user-icon.png';
import Button from 'components/Button/Button';
import Notification from 'components/Notification/Notification';

import AuthContext from 'context/AuthContext/auth-context';
import NotificationCounter from 'components/Notification/NotificationCounter';

const Navbar = () => {
  const { userType, isLoggedIn, token } = useContext(AuthContext);

  const [profileDetail, setProfileDetail] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notificationsLength, setNotificationsLength] = useState(0);

  const [displayUserModal, setDisplayUserModal] = useState(false);
  const [displayNotifications, setDisplayNotifications] = useState(false);

  useEffect(() => {
    const getProfileDetails = async () => {
      const res = await axios.get('http://localhost:90/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfileDetail(res.data.user);
    };

    isLoggedIn && getProfileDetails();
  }, [token, isLoggedIn]);

  const userModalToggleHandler = () => {
    setDisplayUserModal(prevState => !prevState);
  };

  const notificationToggleHandler = () => {
    setDisplayNotifications(prevState => !prevState);
  };

  const handleLogout = () => {
    localStorage.clear('__token__').clear('userType');
  };

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (
        !e.target.closest('.nav-icon') &&
        (displayNotifications || displayUserModal)
      ) {
        setDisplayNotifications(false);
        setDisplayUserModal(false);
      }
    });
  }, [displayNotifications, displayUserModal]);

  useEffect(() => {
    const getNotifications = async () => {
      const res = await axios.get(
        'http://localhost:90/proposal/all/notifications',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const notRead = res.data.filter(({ notification }) => !notification.read);

      setNotificationsLength(notRead.length);
      setNotifications(res.data);
    };

    token && isLoggedIn && getNotifications();
  }, [token, isLoggedIn, setNotificationsLength]);

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

                <li className="nav-item mx-3 position-relative">
                  <Button
                    onClick={notificationToggleHandler}
                    className="nav-link nav-link-login my-2 px-3 py-3 nav-icon"
                  >
                    <IoMdNotificationsOutline />
                  </Button>

                  {displayNotifications && (
                    <Notification notifications={notifications} />
                  )}
                  {<NotificationCounter count={notificationsLength} />}
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
                        <span className="user-name">
                          {profileDetail?.userId.firstName}{' '}
                          {profileDetail?.userId.lastName}
                        </span>
                        <span className="user-type">{userType}</span>
                      </div>

                      <div className="controls d-flex flex-column align-self-start">
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="d-flex align-items-center gap-3 text-decoration-none"
                        >
                          <BiLogOut />
                          Logout
                        </NavLink>

                        <NavLink
                          className="d-flex align-items-center 
                          gap-3 text-decoration-none"
                          to="/"
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
