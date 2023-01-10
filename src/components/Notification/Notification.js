import { useNavigate } from 'react-router-dom';

import { BiBell } from 'react-icons/bi';

import Button from 'components/Button/Button';

const Notification = ({ notifications }) => {
  const navigate = useNavigate();

  const navigateToApplicantProposal = id => {
    navigate('/applicant/proposal', { state: { id } });
  };

  return (
    <div className="notification-container d-flex flex-column align-items-center position-absolute">
      <ul className="notification-list p-0 m-0 d-flex flex-column align-items-center justify-content-center position-relative w-100">
        {notifications.map(({ notification, _id: id }) => (
          <li
            role="button"
            onClick={navigateToApplicantProposal.bind(null, id)}
            key={new Date() + notification.label}
            className="notification px-3 py-4 d-flex gap-3 w-100 align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              <BiBell className="icon-bell" />
              {notification.label}
            </div>
            {!notification.read && (
              <div className="not-read rounded-circle"></div>
            )}
          </li>
        ))}
      </ul>
      <Button className="btn-notification text-center w-100 p-4 bottom-0 position-absolute">
        See all notifications
      </Button>
    </div>
  );
};

export default Notification;
