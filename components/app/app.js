import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import './app.css';
import SwapiService from '../../services/swapi-service';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className='stardb-app'>
        <Header />

        <PersonDetails itemId={11} />
        <PlanetDetails itemId={5} />
        <StarshipDetails itemId={9} />

        <PersonList />
        <PlanetList />
        <StarshipList />
      </div>
    );
  }
}
