import React from 'react';

import { useStateValue } from '../../../../context';

import Container from '../../../../components/Container';
import CircledIndex from '../../../../components/CircledIndex';

import './style.scss';

function QuestionLine () {
    const [{ questions, currentQuestion }, dispatch] = useStateValue();

    return (
        <Container className="question-line">
            {
                questions.map((question, index) => (
                    <CircledIndex className="question-line__item" index={index + 1} />
                ))
            }
        </Container>
    );
}

export default QuestionLine;