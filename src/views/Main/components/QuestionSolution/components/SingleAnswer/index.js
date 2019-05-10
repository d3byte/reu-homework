import React from 'react';

import { useStateValue } from '../../../../../../utils/context';

import Container from '../../../../../../components/Container';

import './style.scss';

function SingleAnswer () {
    const [{ currentQuestion }, dispatch] = useStateValue();

    const selectAnswer = (e, answer) => {
        if (!e.target.checked) {
            return;
        }
        dispatch({
            type: 'select-answer',
            payload: answer
        });
        dispatch({
            type: 'edit-question',
            payload: { ...currentQuestion, givenAnswer: answer }
        });
    };

    const defaultAnswer = currentQuestion.answers[0];

    return (
        <Container bordered className="question-solution-type">
            <ul className="question-solution-type__variants">
                {
                    currentQuestion.answers.map(answer => (
                        <li key={answer.id} className="question-solution-type__variants__item">
                            <aside className="question-solution-type__variants__item__control">
                                <input
                                    id={answer.id}
                                    type="radio"
                                    name="answers"
                                    onChange={e => selectAnswer(e, answer)}
                                    defaultChecked={answer.id === defaultAnswer.id}
                                />
                            </aside>
                            <main className="question-solution-type__variants__item__text">
                                <label 
                                    className="question-solution-type__variants__item__text__label"
                                    htmlFor={answer.id}
                                >
                                    {answer.text}
                                </label>
                            </main>
                        </li>
                    ))
                }
            </ul>
        </Container>
    );
}

export default SingleAnswer;