import React from 'react';

import { selectQuestion } from '../../../../utils/selectQuestion';
import { editQuestion } from '../../../../utils/editQuestion';
import { useStateValue } from '../../../../utils/context';

import Button from '../../../../components/Button';

import './style.scss';

function QuestionActions () {
    const [{ questions, currentQuestion }, dispatch] = useStateValue();

    const currentQuestionIndex = questions.indexOf(currentQuestion);

    const skipQuestion = () => {
        if (currentQuestionIndex !== questions.length - 1) {
            editQuestion(
                {
                    ...currentQuestion,
                    isSkipped: true
                },
                dispatch
            )
            selectQuestion(
                questions[currentQuestionIndex + 1],
                dispatch
            );
        }
    }

    const nextQuestion = () => {
        // Check question answer(s)
        const isQuestionCorrect = true;
        editQuestion(
            {
                ...currentQuestion,
                isCorrect: isQuestionCorrect,
            },
            dispatch
        );
        selectQuestion(
            questions[currentQuestionIndex + 1],
            dispatch
        )
    };

    const wasAnswerGiven = true;

    return (
        <div className="question-actions">
            <Button className="question-actions__action" onClick={skipQuestion}>Пропустить</Button>
            <Button className="question-actions__action question-actions__action--primary" onClick={nextQuestion} disabled={!wasAnswerGiven}>Далее</Button>
        </div>
    );
}

export default QuestionActions;