import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PasswordEye = ({ isPasswordVisible, onClick }) => {
  return (
    <div className="password-eye position-absolute">
      {isPasswordVisible ? (
        <AiFillEye role="button" onClick={onClick} className="eye" />
      ) : (
        <AiFillEyeInvisible role="button" onClick={onClick} className="eye" />
      )}
    </div>
  );
};

export default PasswordEye;
