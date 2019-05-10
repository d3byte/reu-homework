import React from 'react';

import { useStateValue } from '../../../../../../utils/context';

import Container from '../../../../../../components/Container';

import './style.scss';

function UserAnswer () {
    const [{ currentQuestion }, dispatch] = useStateValue();

    const typeAnswer = ({ target: { value } }) => {
        dispatch({
            type: 'select-answer',
            payload: value
        });
        dispatch({
            type: 'edit-question',
            payload: { ...currentQuestion, givenAnswer: value }
        });
    };

    return (
        <Container bordered className="question-solution-type question-solution-type--paddings">
            <textarea
                className="question-solution-type__textarea"
                onChange={typeAnswer}
                rows={4}
                placeholder="Введите ответ сюда"
            ></textarea>
        </Container>
    );
}

export default UserAnswer;