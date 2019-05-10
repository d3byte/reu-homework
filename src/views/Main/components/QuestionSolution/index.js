import React from 'react';

import { useStateValue } from '../../../../utils/context';

import Container from '../../../../components/Container';

import SingleAnswer from './components/SingleAnswer';
import MultipleAnswers from './components/MultipleAnswers';
import UserAnswer from './components/UserAnswer'
import SortAnswers from './components/SortAnswers';
import MatchAnswers from './components/MatchAnswers';


import './style.scss';

function QuestionSolution () {
    const [{ currentQuestion, questionTypes }, dispatch] = useStateValue();

    const determineSolutionComponent = () => {
        switch (currentQuestion.type) {
            case 0:
                return <SingleAnswer />

            case 1:
                return <MultipleAnswers />

            case 2:
                return <UserAnswer />

            case 3:
                return <SortAnswers />

            case 4:
                return <MatchAnswers />

            default:
                return null;
        }
    }

    return (
        <div className="question-solution">
            <Container bordered className="question-solution__question">
                <p className="question-solution__question__caption">Вопрос</p>
                <p className="question-solution__question__text">{currentQuestion.question}</p>
            </Container>

            {determineSolutionComponent()}
        </div>
    );
}

export default QuestionSolution;