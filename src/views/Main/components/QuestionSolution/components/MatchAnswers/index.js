import React from 'react';

import { useStateValue } from '../../../../../../utils/context';

import Container from '../../../../../../components/Container';

import './style.scss';

function MatchAnswers () {
    const [{ currentQuestion }, dispatch] = useStateValue();

    // const updateAnswer = () => {
    //     dispatch({
    //         type: 'select-answer',
    //         payload: value
    //     });
    // };

    return (
        <Container className="question-solution-type question-solution-type--transparent">
            <section className="question-solution-type__variant-wrapper">
                {
                    currentQuestion.answers.map(column => (
                        <Container className="question-solution-type" bordered>
                            <ul className="question-solution-type__variants">
                                {
                                    column.map(answer => (
                                        <li key={answer.id} className="question-solution-type__variants__item">
                                            <main className="question-solution-type__variants__item__text">
                                                <label 
                                                    className="question-solution-type__variants__item__text__label"
                                                >
                                                    {answer.text}
                                                </label>
                                            </main>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Container>
                    ))
                }
            </section>
        </Container>
    );
}

export default MatchAnswers;