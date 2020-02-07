import React from 'react';
import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className='header d-flex'>
      <h3>
        <a href='/'>Star DB</a>
      </h3>

      <button onClick={onServiceChange} className='btn btn-primary btn-sm'>
        Change service
      </button>

      <ul className='d-flex'>
        <li>
          <a href='#/people'>People</a>
        </li>
        <li>
          <a href='#/planets'>Planets</a>
        </li>
        <li>
          <a href='#/starship'>Starship</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
