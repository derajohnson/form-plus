import React, { useState } from 'react';
import './Search.css';
import Message from './Message'
import Template from './Templates'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div >
      <div className="search-section">
      <div className="search">
        <input
          type="text"
          placeholder="Search Templates"
          className="search-input"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <span><i className="fas fa-search" /></span>
      </div>

      <div className="search-category-section">
        <span className="sort">
          Sort By:
        </span>
        <div className="category-section">

          <span className="category">Category</span>
          <select name="category">
            <option value="all">All</option>
            <option value="education">Education</option>
            <option value="e-commerce">E-commerce</option>
            <option value="health">Health</option>

          </select>
        </div>

        <div className="order">
          <span className="category">Order</span>
          <select name="order">
            <option value="default">Default</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>

          </select>
        </div>

        <div className="date">
          <span className="category">Date</span>
          <select name="date">
            <option value="default">Default</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      </div>
    
      <Message />
        <Template searchValue={inputValue}/>
    </div>
  );
};

export default Search;
