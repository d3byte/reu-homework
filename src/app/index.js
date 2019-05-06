import React from 'react';

import Main from '../views/Main';

import './style.scss';
import Container from '../components/Container';

function App ({ questions, questionTypes }) {
  return (
    <Container className="section">
      <Main questions={questions} />
    </Container>
  );
}

export default App;