import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useStateValue } from '../../../../../../utils/context';

import Container from '../../../../../../components/Container';

import './style.scss';

function MatchAnswers () {
    const [{ currentQuestion }, dispatch] = useStateValue();

    const handleDragEnd = (result, index) => {
        const { destination, source } = result;
        console.log(destination, source);
        if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const handledAnswers = [...currentQuestion.answers];
        const draggedItem = handledAnswers[index].splice(source.index, 1)[0];
        handledAnswers[index].splice(destination.index, 0, draggedItem);
        console.log(handledAnswers);

        dispatch({
            type: 'update-answers',
            payload: handledAnswers
        });

    };

    return (
        <Container className="question-solution-type question-solution-type--transparent">
            <section className="question-solution-type__variant-wrapper">
                {
                    currentQuestion.answers.map((column, index) => (
                        <DragDropContext
                            onDragEnd={result => handleDragEnd(result, index)}
                        >
                            <Container className="question-solution-type" bordered>
                                <Droppable droppableId={currentQuestion.id + currentQuestion.id * index}>
                                    {provided => (
                                        <ul
                                            {...provided.droppableProps}
                                            className="question-solution-type__variants"
                                            ref={provided.innerRef}
                                        >
                                            {
                                                column.map((answer, answerIndex) => (
                                                    <Draggable draggableId={answer.id} index={answerIndex}>
                                                        {providedItem => (
                                                            <li
                                                                className="question-solution-type__variants__item"
                                                                {...providedItem.draggableProps}
                                                                {...providedItem.dragHandleProps}
                                                                ref={providedItem.innerRef}
                                                                key={answer.id} 
                                                            >
                                                                <main className="question-solution-type__variants__item__text">
                                                                    <label 
                                                                        className="question-solution-type__variants__item__text__label"
                                                                    >
                                                                        {answer.text}
                                                                    </label>
                                                                </main>
                                                            </li>
                                                        )}
                                                    </Draggable>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </ul>
                                    )}
                                </Droppable>
                            </Container>
                        </DragDropContext>
                    ))
                }
            </section>
        </Container>
    );
}

export default MatchAnswers;