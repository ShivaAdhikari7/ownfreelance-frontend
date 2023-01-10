import { BiCheckCircle } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const SuccessToaster = ({ toastText, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="success-toaster w-100 p-4 d-flex align-items-center justify-content-between mb-5">
      <div className="d-flex align-items-center gap-3">
        <BiCheckCircle className="success-icon" />
        <span>{toastText}</span>
      </div>
      <MdClose role="button" onClick={onClose} className="success-icon" />
    </div>
  );
};

export default SuccessToaster;
