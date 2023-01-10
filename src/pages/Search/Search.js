import { useState, useEffect, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineRssFeed, MdSort } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import SearchResultFreelancer from "components/Search/SearchResultFreelancer";
import SearchResultClient from "components/Search/SearchResultClient";
import FreelancerFilter from "components/Sorting/FreelancerFilter";

import LoadingSpinner from "components/Spinner/LoadingSpinner";
import Pagination from "components/Pagination/Pagination";
import Button from "components/Button/Button";

import getSearchResults from "api/getSearchResults";
import axios from "axios";
import Footer from "components/Footer/Footer";
import { USER_TYPE, TOKEN } from "constants/utils";

const Search = () => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [finalQuery, setFinalQuery] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [hourlyRateIsHighest, setHourlyRateIsHighest] = useState(true);
  const [filters, setFilters] = useState([]);

  const hourlyRateChangeHandler = () => {
    setHourlyRateIsHighest((prevState) => !prevState);
  };

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
    const getFilteredData = async () => {
      setIsLoading(true);

      let apiStr = "";
      if (filters.length > 0) {
        filters.forEach((filter, i) => {
          apiStr += `scope.${filter.filterName}=${filter.label}${
            i !== filters.length - 1 ? "&" : ""
          }`;
        });
      }

      try {
        if (filters && filters.length > 0) {
          const res = await axios.get(`http://localhost:90/client?${apiStr}`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });

          setIsLoading(false);
          setTotalResults(res.data.data.result);

          USER_TYPE === "Client"
            ? setSearchResults(res.data.data.freelancers)
            : setSearchResults(res.data.data.clients);
        } else {
          await getPaginatedResults();
        }
      } catch (err) {
        console.error(err);
      }
    };

    getFilteredData();
  }, [filters, getPaginatedResults]);

  useEffect(() => {
    const getData = async () => {
      let res;

      setIsLoading(true);
      if (USER_TYPE === "Client") {
        res = hourlyRateIsHighest
          ? await axios.get("http://localhost:90/freelancer?sort=-hourlyRate", {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            })
          : await axios.get("http://localhost:90/freelancer?sort=hourlyRate", {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            });
      } else {
        res = hourlyRateIsHighest
          ? await axios.get("http://localhost:90/client?sort=-hourlyRate", {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            })
          : await axios.get("http://localhost:90/client?sort=hourlyRate", {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            });
      }

      setIsLoading(false);
      USER_TYPE === "Client"
        ? setSearchResults(res.data.data.freelancers)
        : setSearchResults(res.data.data.clients);
    };

    getData();
  }, [hourlyRateIsHighest]);

  const saveHandler = () => {
    setIsSaved((prevVal) => !prevVal);
  };

  useEffect(() => {
    let timer;
    let delay = 750;

    clearTimeout(timer);

    timer = setTimeout(() => {
      setFinalQuery(searchQuery);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const getResults = async () => {
      await getPaginatedResults();
    };

    getResults();
  }, [getPaginatedResults]);

  const searchQueryChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();

    await getPaginatedResults(finalQuery, currentPage);
  };

  const filtersHandler = useCallback((filters) => {
    setFilters(filters);
  }, []);

  const navigateToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="section-search">
            <div className="filter-section py-5 px-4">
              <h2 className="mb-3">Filter By:</h2>
              <FreelancerFilter getAllFilters={filtersHandler} />
            </div>
            <div className="search-section p-5">
              <div className="mb-5 pb-3">
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

              <div className="d-flex align-items-center justify-content-between mt-5">
                <div className="search-stats d-flex align-items-center mb-2">
                  <MdOutlineRssFeed />
                  <span>
                    <strong>{totalResults}</strong>{" "}
                    {USER_TYPE === "Freelancer"
                      ? `Job${totalResults > 1 ? "s " : " "}`
                      : `Freelancer${totalResults > 1 ? "s " : " "}`}
                    found
                  </span>
                </div>

                <Button onClick={hourlyRateChangeHandler} className="btn-sort">
                  Sort by hourly rate <MdSort />
                </Button>
              </div>
              <div className="search-result-section">
                <div className="search-results d-flex flex-column">
                  {!isLoading && searchResults ? (
                    searchResults.map((result) =>
                      USER_TYPE === "Client" ? (
                        <SearchResultClient
                          key={result._id}
                          profilePictureUrl={result.profilePictureUrl}
                          firstName={result.userId.firstName}
                          lastName={result.userId.lastName}
                          hourlyRate={result.hourlyRate}
                          bio={result.bio}
                          skills={result.skills}
                          jobTitle={result.jobTitle}
                          onSave={saveHandler}
                          saved={isSaved}
                          onClick={navigateToDetailPage.bind(null, result._id)}
                        />
                      ) : USER_TYPE === "Freelancer" ? (
                        <SearchResultFreelancer
                          headline={result.headline}
                          skills={result.skills}
                          hourlyRate={result.hourlyRate}
                          description={result.description}
                          projectDuration={result.scope.projectDuration}
                          projectSize={result.scope.projectSize}
                          onSave={saveHandler}
                          saved={isSaved}
                          onClick={navigateToDetailPage.bind(null, result._id)}
                        />
                      ) : (
                        ""
                      )
                    )
                  ) : (
                    <LoadingSpinner />
                  )}
                </div>
                {searchResults && searchResults.length >= 1 && (
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
      <Footer />
    </>
  );
};

export default Search;
