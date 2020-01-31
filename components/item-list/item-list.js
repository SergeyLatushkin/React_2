import React, { Component } from 'react';
import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        <li
          onClick={() => this.props.onItemSelected(id)}
          key={id}
          className='list-group-item'
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <div className='item-list'>
        <ul className='list-group'>{items}</ul>
      </div>
    );
  }
}
