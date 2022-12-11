import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

const SearchResultClient = ({
  profilePictureUrl,
  firstName,
  lastName,
  hourlyRate,
  bio,
  skills,
  jobTitle,
  saved,
  onSave,
}) => {
  return (
    <div className="search-result search-result-client">
      <div className="search-title d-flex align-items-center justify-content-between">
        <div className="search-personal__details d-flex align-items-center mb-4">
          <img
            src={profilePictureUrl}
            alt={`${firstName} ${lastName}`}
            className="profile-image rounded-circle"
          />
          <div className="personal__details d-flex flex-column justify-space-around">
            <span className="name">
              {firstName} {lastName}
            </span>
            <span className="job-title">{jobTitle}</span>
            <span className="country">Nepal</span>
          </div>
        </div>

        <span onClick={onSave}>
          {saved ? (
            <AiFillHeart className="heart-icon filled" />
          ) : (
            <AiOutlineHeart className="heart-icon" />
          )}
        </span>
      </div>
      <div className="search-subtitle d-flex">
        <span className="search-hourly__rate">
          Hourly Rate: ${hourlyRate}/hr
        </span>
      </div>
      <div className="search-description">{bio}</div>
      <div className="search-skills d-flex">
        {skills.map(skill => (
          <span key={skill.id}>{skill.label}</span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultClient;
