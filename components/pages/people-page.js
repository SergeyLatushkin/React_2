import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import { withRouter } from 'react-router-dom';
import Row from '../row';

const PeoplePage = ({ history, match }) => {
  return (
    <Row
      left={<PersonList onItemSelected={id => history.push(id)} />}
      right={<PersonDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PeoplePage);
