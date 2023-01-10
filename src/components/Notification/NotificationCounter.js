const NotificationCounter = ({ count }) => {
  return (
    <div className="notification-counter rounded-circle d-flex align-items-center justify-content-center position-absolute">
      {count}
    </div>
  );
};

export default NotificationCounter;
