import { useState, useEffect } from 'react';

const FreelancerFilter = ({ getAllFilters }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    getAllFilters(filters);
  }, [filters, getAllFilters]);

  const removeFilteringValue = filterValue => {
    setFilters(prevFilters => {
      return prevFilters.filter(filterItem => {
        return filterItem.label !== filterValue.label;
      });
    });
  };

  const addFilteringValue = filterValue => {
    setFilters(prevFilters => [...prevFilters, filterValue]);
  };

  const handleFilterCheck = (checked, value, filterName) => {
    if (checked) {
      addFilteringValue({
        filterName: filterName,
        label: value,
      });
    } else {
      removeFilteringValue({
        filterName: filterName,
        label: value,
      });
    }
  };

  return (
    <div className="freelancer-sort-options">
      <div className="sort-option sort-by-experience-level mb-5 py-5">
        <h4 className="mb-4">Experience Level</h4>
        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectExperienceLevel'
              );
            }}
            id="entryLevel"
            type="checkbox"
            value="Beginner level"
          />
          <label htmlFor="entryLevel">Beginner Level</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input
            id="intermediateLevel"
            type="checkbox"
            value="Intermediate level"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectExperienceLevel'
              );
            }}
          />
          <label htmlFor="intermediateLevel">Intermediate Level</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start">
          <input
            id="expertLevel"
            type="checkbox"
            value="Large level"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectExperienceLevel'
              );
            }}
          />
          <label htmlFor="expertLevel">Expert Level</label>
        </div>
      </div>

      <div className="sort-by-project-size sort-option mb-5 pb-5">
        <h4 className="mb-4">Project Size</h4>
        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input
            id="small"
            type="checkbox"
            value="Small"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectSize'
              );
            }}
          />
          <label htmlFor="small">Small</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input
            id="medium"
            type="checkbox"
            value="Medium"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectSize'
              );
            }}
          />
          <label htmlFor="medium">Medium</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start">
          <input
            id="large"
            type="checkbox"
            value="Large"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectSize'
              );
            }}
          />
          <label htmlFor="large">Large</label>
        </div>
      </div>

      <div className="sort-by-project-duration sort-option mb-5 pb-5">
        <h4 className="mb-4">Project Duration</h4>
        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input
            id="oneToThree"
            type="checkbox"
            value="1 to 3 months"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectDuration'
              );
            }}
          />
          <label htmlFor="oneToThree">1 to 3 months</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input
            id="threeToSix"
            type="checkbox"
            value="3 to 6 months"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectDuration'
              );
            }}
          />
          <label htmlFor="threeToSix">3 to 6 months</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start">
          <input
            id="moreThanSix"
            type="checkbox"
            value="More than 6 months"
            onChange={e => {
              handleFilterCheck(
                e.target.checked,
                e.target.value,
                'projectDuration'
              );
            }}
          />
          <label htmlFor="moreThanSix">More than 6 months</label>
        </div>
      </div>

      <div className="sort-by-number-of-proposals sort-option mb-5">
        <h4 className="mb-4">Number of Proposals</h4>
        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input id="lessThanFive" type="checkbox" value="Less than 5" />
          <label htmlFor="lessThanFive">Less than 5</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input id="fiveToTen" type="checkbox" value="5 to 10" />
          <label htmlFor="fiveToTen">5 to 10</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input id="tenToFifteen" type="checkbox" value="10 to 15" />
          <label htmlFor="tenToFifteen">10 to 15</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start mb-3">
          <input id="fifteenToTwenty" type="checkbox" value="15 to 20" />
          <label htmlFor="fifteenToTwenty">15 to 20</label>
        </div>

        <div className="filter-input-field d-flex align-items-center justify-content-start">
          <input id="moreThanTwenty" type="checkbox" value="More than 20" />
          <label htmlFor="moreThanTwenty">More than 20</label>
        </div>
      </div>
    </div>
  );
};

export default FreelancerFilter;
