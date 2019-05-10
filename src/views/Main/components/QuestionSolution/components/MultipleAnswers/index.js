import React from 'react';

import { useStateValue } from '../../../../../../utils/context';

import Container from '../../../../../../components/Container';

import './style.scss';

function MultipleAnswers () {
    const [{ currentQuestion }, dispatch] = useStateValue();

    let checkedAnswers = [];

    const selectAnswer = (e, answer) => {
        if (!e.target.checked) {
            checkedAnswers = checkedAnswers.filter(item => item.id !== answer.id);
        } else {
            checkedAnswers = [...checkedAnswers, answer];
        }

        dispatch({
            type: 'select-multiple-answers',
            payload: checkedAnswers
        });

        dispatch({
            type: 'edit-question',
            payload: { ...currentQuestion, givenAnswer: answer }
        });
    };

    return (
        <Container bordered className="question-solution-type">
            <ul className="question-solution-type__variants">
                {
                    currentQuestion.answers.map(answer => (
                        <li key={answer.id} className="question-solution-type__variants__item">
                            <aside className="question-solution-type__variants__item__control">
                                <input
                                    id={answer.id}
                                    type="checkbox"
                                    name="answers"
                                    onChange={e => selectAnswer(e, answer)}
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

export default MultipleAnswers;