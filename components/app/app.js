import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundary';
import './app.css';
import SwapiService from '../../services/swapi-service';
import DummyService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummyService : SwapiService;

      console.log(Service.name);

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className='stardb-app'>
            <Header onServiceChange={this.onServiceChange} />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <PlanetList />
            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
