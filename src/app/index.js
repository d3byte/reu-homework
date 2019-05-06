import React from 'react';

import { reducer } from './reducer';
import { StateProvider } from '../utils/context';

import Main from '../views/Main';

import './style.scss';
import Container from '../components/Container';

function App ({ questions, questionTypes }) {
  const initialState = {
    questions,
    questionTypes,
    currentQuestion: (questions || [])[0] || {},
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Container className="section">
        <Main />
      </Container>
    </StateProvider>
  );
}

export default App;