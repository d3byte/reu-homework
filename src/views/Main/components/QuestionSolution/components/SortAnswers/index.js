import React from 'react';

import { useStateValue } from '../../../../../../utils/context';

import Container from '../../../../../../components/Container';

import './style.scss';

function SortAnswers () {
    const [{ currentQuestion }, dispatch] = useStateValue();

    // const updateAnswer = () => {
    //     dispatch({
    //         type: 'select-answer',
    //         payload: value
    //     });
    // };

    return (
        <Container bordered className="question-solution-type">
            <ul className="question-solution-type__variants">
                {
                    currentQuestion.answers.map(answer => (
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
    );
}

export default SortAnswers;