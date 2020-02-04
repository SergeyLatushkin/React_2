import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = { selectedPerson: null, hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const itemDetails = <ItemDetails itemId={this.state.selectedPerson} />;

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundary>
    );
  }
}
