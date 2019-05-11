import React from 'react';

import { useStateValue } from '../../utils/context';
import { selectQuestion } from '../../utils/selectQuestion';

import Container from '../../components/Container';
import CircledIndex from '../../components/CircledIndex';

import './style.scss';

function Main () {
    const [{ questions, currentQuestion }, dispatch] = useStateValue();

    const proceedToQuestion = question => {
        if (question.id === currentQuestion.id) {
            return;
        }

        selectQuestion(question, dispatch);
    };

    return (
        <Container className="aside">
             {
               questions.map((question, index) => (
                    <Container onClick={() => proceedToQuestion(question)} key={question.id} className="aside__question" bordered>
                        <aside className="aside__question__index">
                            <CircledIndex index={index + 1} />
                        </aside>
                        <main className="aside__question__text">
                            {question.question}
                        </main>
                    </Container>
               ))
           }
        </Container>
    );
};
export default Main;