import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}</span>
      <span>{field}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    selectedItem: null,
    loading: false,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({
        item,
        loading: false,
        image: getImageUrl(item)
      });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>Select an item from the list </span>;
    }

    const { name, gender, birthYear, eyeColor } = item;

    return (
      <div className='item-details card'>
        <img className='item-image' src={image} />
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            {React.Children.map(this.props.children, (child, idx) => {
              return <li>{idx}</li>;
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
