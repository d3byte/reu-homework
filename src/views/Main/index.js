import React from 'react';

import QuestionLine from './components/QuestionLine';
import QuestionActions from './components/QuestionActions';
import QuestionSolution from './components/QuestionSolution';

import Container from '../../components/Container';

import './style.scss';

function Main () {
    return (
        <Container className="main">
            <QuestionLine />
            <QuestionActions />
            <QuestionSolution />
        </Container>
    );
};
export default Main;