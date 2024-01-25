import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange, displayRange = 3 }) => {
  const [pageNumber, setPageNumber] = useState(currentPage);

  const handlePageClick = (page) => {
    setPageNumber(page);
    onPageChange(page);
  };

  const paginationContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '200px',
    marginBottom: '50px' 
  };

  const pageNumberStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '50px',
    color: pageNumber === currentPage ? '#000000' : '#000000',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const ellipsisStyle = {
    fontSize: '14px',
    marginRight: '50px',
    color: '#000000',
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, pageNumber - displayRange);
    const endPage = Math.min(totalPages, pageNumber + displayRange);

    if (startPage > 1) {
      pageNumbers.push(
        <span
          key={1}
          style={pageNumberStyle}
          onClick={() => handlePageClick(1)}
        >
          1
        </span>,
        <span key="ellipsis1" style={ellipsisStyle}>
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          style={pageNumberStyle}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="ellipsis2" style={ellipsisStyle}>
          ...
        </span>,
        <span
          key={totalPages}
          style={pageNumberStyle}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </span>
      );
    }

    return pageNumbers;
  };

  return <div style={paginationContainerStyle}>{renderPageNumbers()}</div>;
};

export default Pagination;
