import React from 'react';

import { selectQuestion } from '../../../../utils/selectQuestion';
import { useStateValue } from '../../../../utils/context';

import Button from '../../../../components/Button';

import './style.scss';

function QuestionActions () {
    const [{ questions, currentQuestion }, dispatch] = useStateValue();

    const currentQuestionIndex = questions.indexOf(currentQuestion);

    const skipQuestion = () => selectQuestion(
        {
            isSkipped: true,
            ...questions[currentQuestionIndex + 1]
        },
        dispatch
    );

    const nextQuestion = () => {
        // Check question answer(s)
        const isQuestionCorrect = true;
        return selectQuestion(
            {
                isCorrect: isQuestionCorrect,
                ...questions[currentQuestionIndex + 1]
            },
            dispatch
        )
    };

    const wasAnswerGiven = false;

    return (
        <div className="question-actions">
            <Button className="question-actions__action" onClick={skipQuestion}>Пропустить</Button>
            <Button className="question-actions__action question-actions__action--primary" onClick={nextQuestion} disabled={!wasAnswerGiven}>Далее</Button>
        </div>
    );
}

export default QuestionActions;