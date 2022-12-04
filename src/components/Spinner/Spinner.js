import { useEffect } from 'react';

const Spinner = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
