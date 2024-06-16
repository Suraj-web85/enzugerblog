import React, { useEffect } from "react";

const BlogPagination = ({
  totalItems,
  setProductsData,
  currentPage,
  onPageChange,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProductsData(startIndex, endIndex);
  }, [currentPage, totalItems, setProductsData, itemsPerPage]);

  const getPaginationNumbers = () => {
    const delta = 1;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }

    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const paginationNumbers = getPaginationNumbers();

  const prePage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    if (id !== "...") {
      onPageChange(id);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="shop-pagination">
      <ul>
        <li className="pg-item">
          <button
            className="page-link pg-linkprev"
            onClick={prePage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {paginationNumbers.map((n, index) => (
          <li
            key={index}
            className={`pg-item ${currentPage === n ? "pg-iact" : ""}`}
          >
            <button className="page-link" onClick={() => changeCurrentPage(n)}>
              {n}
            </button>
          </li>
        ))}
        <li className="pg-item">
          <button
            className="page-link pg-linknext"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;
