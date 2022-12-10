import { useState } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineRssFeed } from 'react-icons/md';

import Navbar from 'components/Navbar/Navbar';
import SearchResultFreelancer from 'components/Search/SearchResultFreelancer';
import SearchResultClient from 'components/Search/SearchResultClient';

import LoadingSpinner from 'components/Spinner/LoadingSpinner';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchQueryChangeHandler = e => {
    setSearchQuery(e.target.value);
  };

  const searchSubmitHandler = async e => {
    e.preventDefault();

    let data;

    try {
      setIsLoading(true);

      if (localStorage.getItem('userType') === 'Client') {
        ({ data } = await axios.get(
          `http://localhost:90/freelancer?keyword=${searchQuery}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('__token__')}`,
            },
          }
        ));

        setIsLoading(false);
      } else if (localStorage.getItem('userType') === 'Freelancer') {
        ({ data } = await axios.get(
          `http://localhost:90/client?keyword=${searchQuery}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('__token__')}`,
            },
          }
        ));

        setIsLoading(false);
      }

      console.log(data);

      let freelancers =
        localStorage.getItem('userType') === 'Client'
          ? data.data.freelancers
          : data.data.clients;

      setTotalResults(data.data.result);
      setSearchResults(freelancers);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="section-main d-flex justify-content-around ">
            <div className="filter-section py-5">
              <h2>Filter By:</h2>
            </div>
            <div className="search-section p-5">
              <div className="mb-5">
                <h2 className="mb-4">Search Here</h2>

                <form onSubmit={searchSubmitHandler} className="d-flex">
                  <input
                    className="search-box w-100 px-3"
                    type="search"
                    name="searchBar"
                    placeholder="Search-here..."
                    onChange={searchQueryChangeHandler}
                    value={searchQuery}
                  />
                  <button type="submit" className="search-icon text-center">
                    <FiSearch />
                  </button>
                </form>
              </div>

              <div className="search-stats d-flex align-items-center mb-2">
                <MdOutlineRssFeed />{' '}
                <span>
                  <strong>{totalResults}</strong>{' '}
                  {localStorage.getItem('userType') === 'Freelancer'
                    ? 'Jobs'
                    : 'Freelancers'}{' '}
                  found
                </span>
              </div>
              <div className="search-results d-flex flex-column">
                {!isLoading ? (
                  searchResults.map(result =>
                    localStorage.getItem('userType') === 'Client' ? (
                      <SearchResultClient
                        key={result._id}
                        profilePictureUrl={result.profilePictureUrl}
                        firstName={result.userId.firstName}
                        lastName={result.userId.lastName}
                        hourlyRate={result.hourlyRate}
                        bio={result.bio}
                        skills={result.skills}
                        jobTitle={result.jobTitle}
                      />
                    ) : localStorage.getItem('userType') === 'Freelancer' ? (
                      <SearchResultFreelancer
                        headline={result.headline}
                        skills={result.skills}
                        hourlyRate={result.hourlyRate}
                        description={result.description}
                        projectDuration={result.scope.projectDuration}
                        projectSize={result.scope.projectSize}
                      />
                    ) : (
                      ''
                    )
                  )
                ) : (
                  <LoadingSpinner />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
