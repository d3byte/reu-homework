import React, { useEffect } from 'react';

import { selectQuestion } from '../../../../utils/selectQuestion';
import { useStateValue } from '../../../../utils/context';
import { useInterval } from '../../../../utils/useInterval';

import Container from '../../../../components/Container';
import CircledIndex from '../../../../components/CircledIndex';

import './style.scss';

function QuestionLine () {
    const [{ questions, currentQuestion, timeLeft }, dispatch] = useStateValue();

    const intervalDelay = timeLeft === 0 ? null : 1000;

    useInterval(() => {
        dispatch({
            type: 'tick-time',
            payload: timeLeft - 1
        })
    }, intervalDelay);

    const timeLeftText = timeLeft > 60 ? Math.floor(timeLeft / 60) + ' минут' : timeLeft + ' секунд';

    return (
       <>
        <p className="question-line__caption">Осталось {timeLeftText}</p>
         <Container bordered className="question-line">
            {
                questions.map((question, index) => (
                    <CircledIndex
                        key={index}
                        index={index + 1}
                        className={`
                            question-line__item 
                            ${question.id === currentQuestion.id ? 'question-line__item--active' : ''}
                            ${question.isSkipped ? 'question-line__item--skipped' : ''}
                            ${question.isCorrect ? 'question-line__item--correct' : ''}
                        `}
                    />
                ))
            }
        </Container>
       </>
    );
}

export default QuestionLine;