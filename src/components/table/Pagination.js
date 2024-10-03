import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, totalPages, onPageChange = () => { } }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between opensans-semibold">
            <div className="d-flex align-items-center gap-2 display-9 leading-19">
                <p className="m-0">Page</p>
                <select
                    className="form-select"
                    aria-label="Select page"
                    value={currentPage}
                    onChange={(e) => handlePageChange(Number(e.target.value))}
                >
                    {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <p className="m-0 text-nowrap">of {totalPages}</p>
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination pagination-style1 isolate gap-2">
                    <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                        <button
                            className="page-link"
                            aria-label="Previous"
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                        >
                            <span aria-hidden="true">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#212529"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
                                </svg>
                            </span>
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i + 1} className={`page-item ${currentPage === i + 1 && 'active'}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                        <button
                            className="page-link"
                            aria-label="Next"
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                        >
                            <span aria-hidden="true">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#212529"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                                </svg>
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
