import React from 'react'
import './Paginate.css'

const Pagination = ({postsPerPage, totalPosts, currentPage, previous, next}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <div className='paginate-container'>
                <div>
                {currentPage > 1 ? <a href='!#' className='previous' onClick={() => previous()}> Previous</a> : <a className='previous' href='!#'> Previous</a>}

                </div>
            <div>
            <p><span className='current-page'>{currentPage}</span> of {pageNumbers.length}</p>

            </div>
            <div>
            {currentPage < pageNumbers.length ?  <a href='!#' className='next' onClick={() => next()}> Next <span><i className="fas fa-chevron-right"></i></span></a> :  <a href='!#' className='next'> Next <span><i className="fas fa-chevron-right"></i></span></a>}

            </div>
           
                
            </div>
           

        </div>
    )
}

export default Pagination