import React, { Component } from 'react';
import './item-list.css';
import withData from '../foc-helper';
import SwapiService from '../../services/swapi-service';

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        onClick={() => onItemSelected(id)}
        key={id}
        className='list-group-item'
      >
        {label}
      </li>
    );
  });

  return <ul className='item-list list-group'>{items}</ul>;
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
