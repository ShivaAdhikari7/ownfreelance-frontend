import Navbar from "components/Navbar/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import profileImage from "assets/images/testimonial-1.jpg";

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="section-main d-flex justify-content-around">
            <div className="filter-section">
              <h2>Filter By:</h2>
            </div>
            <div className="search-section">
              <h2>Search Here</h2>
              <input
                className="search-box"
                type="text"
                name="searchBar"
                value=""
                placeholder="Search-here..."
              />
              <div className="search-icon text-center">
                <FiSearch />
              </div>
              <div className="search-result">
                <div className="search-title d-flex align-items-center ">
                  <a href="#" className="search-link">
                    Website, development and maintenance uploading data
                  </a>
                  <AiOutlineHeart className="heart-icon" />
                </div>
                <div className="search-subtitle d-flex">
                  <span className="search-hourly__rate">
                    Hourly Rate: $20/hr
                  </span>
                  <span className="search-experience__level">
                    Experience: Entry Level
                  </span>
                  <span className="search-estimated__time">
                    Estimated Time: 1 to 3 months
                  </span>
                </div>
                <div className="search-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="search-skills d-flex">
                  <span>Web development</span>
                  <span>Web design</span>
                  <span>Android application development</span>
                </div>
              </div>
              <div className="search-result search-result-client">
                <div className="search-title d-flex align-items-center ">
                  <div className="search-personal__details">
                    <img
                      src={profileImage}
                      alt="sneha sharma"
                      className="profile-image"
                    />
                  </div>
                  <AiOutlineHeart className="heart-icon" />
                </div>
                <div className="search-subtitle d-flex">
                  <span className="search-hourly__rate">
                    Hourly Rate: $20/hr
                  </span>
                  <span className="search-experience__level">
                    Experience: Entry Level
                  </span>
                  <span className="search-estimated__time">
                    Estimated Time: 1 to 3 months
                  </span>
                </div>
                <div className="search-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="search-skills d-flex">
                  <span>Web development</span>
                  <span>Web design</span>
                  <span>Android application development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
