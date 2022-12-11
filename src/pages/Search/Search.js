import { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineRssFeed } from 'react-icons/md';

import Navbar from 'components/Navbar/Navbar';
import SearchResultFreelancer from 'components/Search/SearchResultFreelancer';
import SearchResultClient from 'components/Search/SearchResultClient';

import LoadingSpinner from 'components/Spinner/LoadingSpinner';
import Pagination from 'components/Pagination/Pagination';

import getSearchResults from 'api/getSearchResults';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [finalQuery, setFinalQuery] = useState('');

  useEffect(() => {
    let timer;
    let delay = 750;

    clearTimeout(timer);

    timer = setTimeout(() => {
      setFinalQuery(searchQuery);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getPaginatedResults = useCallback(async () => {
    setIsLoading(true);
    try {
      const [totalResults, searchResults] = await getSearchResults(
        finalQuery,
        currentPage
      );

      setIsLoading(false);
      setSearchResults(searchResults);
      setTotalResults(totalResults);
    } catch (err) {
      setIsLoading(false);
    }
  }, [currentPage, finalQuery]);

  useEffect(() => {
    const getResults = async () => {
      await getPaginatedResults();
    };

    getResults();
  }, [getPaginatedResults]);

  const searchQueryChangeHandler = e => {
    setSearchQuery(e.target.value);
  };

  const searchSubmitHandler = async e => {
    e.preventDefault();

    await getPaginatedResults(finalQuery, currentPage);
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
                <MdOutlineRssFeed />
                <span>
                  <strong>{totalResults}</strong>{' '}
                  {localStorage.getItem('userType') === 'Freelancer'
                    ? 'Jobs'
                    : `Freelancer${totalResults > 1 ? 's ' : ' '}`}
                  found
                </span>
              </div>
              <div className="search-result-section">
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
                {searchResults.length > 1 && (
                  <Pagination
                    className="w-50 ml-auto justify-content-end mt-5"
                    currentPage={currentPage}
                    currentPageChangeHandler={setCurrentPage}
                  />
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
