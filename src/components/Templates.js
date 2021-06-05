import React, {useReducer, useEffect, useState} from 'react';
import axios from 'axios';
import './Templates.css';
import IndividualTemplate from './IndividualTemplate';
import Pagination from './Pagination';

const initialState = {
  loading: true,
  allTemplates: [],
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        allTemplates: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'something went wrong',
        allTemplates: [],
      };
    case 'SEARCH_INPUT': {
      return {
        allTemplates: action.payload,
      };
    }
    default:
      return state;
  }
};

const Template = props => {
  const [currentPage, setCurrentPage] = useState (1);
  const [postsPerPage] = useState (30);
  const [state, dispatch] = useReducer (reducer, initialState);
  const paginate = pageNumber => setCurrentPage (pageNumber);

  useEffect (() => {
    axios
      .get (
        'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'
      )
      .then (response => {
        dispatch ({type: 'FETCH_SUCCESS', payload: response.data});
      })
      .catch (err => {
        dispatch ({type: 'FETCH_ERROR'});
      });
  }, []);

  //get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.allTemplates.slice (
    indexOfFirstPost,
    indexOfLastPost
  );
  const previous = () => {
    let current = currentPage - 1;
    setCurrentPage (current);
  };
  const next = () => {
    let current = currentPage + 1;
    setCurrentPage (current);
  };
  const searchValue = props.searchValue;

  
  return (
    <div className="template-container">
      <div className="template-header">
        <div>
          <p><span>All</span> Templates</p>

        </div>

        <div>
          <p className="num-of-templates">
            <span>{state.allTemplates.length}</span> templates
          </p>
        </div>
      </div>

      {state.loading
        ? <div>
            <div className="bouncer">
              <div />
              <div />
              <div />
              <div />
            </div>
            <p className="load-text">Loading Templates...</p>

          </div>
        : <div>
            <IndividualTemplate
              template={currentPosts}
              searchValue={searchValue}
            />
            <Pagination
              next={next}
              previous={previous}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              totalPosts={state.allTemplates.length}
              paginate={paginate}
            />

          </div>}
    </div>
  );
};

export default Template;
