import React from 'react';
import './Pagination.css';

const Pagination = ({ articlesTotal, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(articlesTotal / 6);

    return (
        <div className="pagination-container">
            {currentPage > 1 && (
                <button onClick={() => onPageChange(currentPage - 1)} className="pagination-button">
                    Anterior
                </button>
            )}

            {[...Array(totalPages)].map((_, index) => (
                <button 
                    key={index}
                    className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            {currentPage < totalPages && (
                <button onClick={() => onPageChange(currentPage + 1)} className="pagination-button">
                    Próximo
                </button>
            )}
        </div>
    );
}

export default Pagination;
