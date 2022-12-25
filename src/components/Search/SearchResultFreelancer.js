const { AiFillHeart } = require('react-icons/ai');
const { AiOutlineHeart } = require('react-icons/ai');

const SearchResultFreelancer = ({
  headline,
  skills,
  hourlyRate,
  description,
  projectDuration,
  projectSize,
  saved,
  onSave,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="search-result">
      <div className="search-title d-flex align-items-center justify-content-between mb-4">
        <span className="search-link">{headline}</span>
        {saved ? (
          <AiFillHeart onClick={onSave} className="heart-icon filled" />
        ) : (
          <AiOutlineHeart onClick={onSave} className="heart-icon" />
        )}
      </div>
      <div className="search-subtitle d-flex">
        <span className="search-hourly__rate">
          Hourly Rate: ${hourlyRate}/hr
        </span>
        <span className="search-experience__level">
          Experience: {projectSize}
        </span>
        <span className="search-estimated__time">
          Estimated Time: {projectDuration}
        </span>
      </div>
      <div className="search-description">{description}</div>
      <div className="search-skills d-flex">
        {skills.map(skill => (
          <span key={skill.id}>{skill.label}</span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultFreelancer;
