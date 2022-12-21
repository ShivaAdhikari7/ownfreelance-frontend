import { useState } from 'react';

import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';

import { PAGINATION } from 'constants/pagination';

const Pagination = ({ currentPageChangeHandler, currentPage, className }) => {
  const [currentPageSet, setCurrentPageSet] = useState(
    PAGINATION.INITIAL_PAGES
  );

  const paginationBtnHandler = indexValue => {
    if (currentPage === currentPageSet[indexValue]) {
      setCurrentPageSet(prevData => {
        return prevData.map(value =>
          indexValue === 0
            ? value - PAGINATION.MAX_PAGINATION_BTN_DISPLAYED
            : value + PAGINATION.MAX_PAGINATION_BTN_DISPLAYED
        );
      });
      currentPageChangeHandler(
        indexValue === 0
          ? currentPageSet[indexValue] - 1
          : currentPageSet[indexValue] + 1
      );
    } else {
      currentPageChangeHandler(prevPage =>
        indexValue === 0 ? --prevPage : ++prevPage
      );
    }
  };

  return (
    <div
      className={`pagination-container d-flex align-items-center ${
        className && className
      }`}
    >
      <div
        className={`page-item rounded-circle d-flex align-items-center justify-content-center ${
          currentPage === PAGINATION.INITIAL_PAGE && 'disabled'
        }`}
        role="button"
        tabIndex={0}
        onClick={
          currentPage === PAGINATION.INITIAL_PAGE
            ? null
            : paginationBtnHandler.bind(null, 0)
        }
      >
        <BiChevronLeft />
      </div>
      {currentPageSet.map(pageNum => (
        <div
          data-test={`cy-${pageNum}`}
          key={pageNum}
          className={`page-item rounded-circle d-flex align-items-center justify-content-center ${
            currentPage === pageNum && 'page-item-active'
          }`}
          role="button"
          tabIndex={0}
          onClick={currentPageChangeHandler.bind(null, pageNum)}
        >
          {pageNum}
        </div>
      ))}
      <div
        className={`page-item rounded-circle d-flex align-items-center justify-content-center ${
          currentPage === PAGINATION.LAST_PAGE && 'disabled'
        }`}
        role="button"
        tabIndex={0}
        onClick={
          currentPage === PAGINATION.LAST_PAGE
            ? null
            : paginationBtnHandler.bind(null, currentPageSet.length - 1)
        }
      >
        <BiChevronRight />
      </div>
    </div>
  );
};

export default Pagination;
