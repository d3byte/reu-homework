import React from 'react';

import { selectQuestion } from '../../../../utils/selectQuestion';
import { useStateValue } from '../../../../utils/context';

import Container from '../../../../components/Container';
import CircledIndex from '../../../../components/CircledIndex';

import './style.scss';

function QuestionLine () {
    const [{ questions, currentQuestion }, dispatch] = useStateValue();

    return (
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
                        onClick={e => selectQuestion(question, dispatch)}
                    />
                ))
            }
        </Container>
    );
}

export default QuestionLine;