import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useStateValue } from '../../../../../../utils/context';

import Container from '../../../../../../components/Container';

import './style.scss';

function SortAnswers () {
    const [{ currentQuestion, questions }, dispatch] = useStateValue();

    // const updateAnswer = () => {
    //     dispatch({
    //         type: 'select-answer',
    //         payload: value
    //     });
    // };

    const handleDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const handledAnswers = [...currentQuestion.answers];
        const draggedItem = handledAnswers.splice(source.index, 1)[0];
        handledAnswers.splice(destination.index, 0, draggedItem);

        dispatch({
            type: 'update-answers',
            payload: handledAnswers
        });
    };

    return (
        <DragDropContext
            onDragEnd={handleDragEnd}
        >
            <Container bordered className="question-solution-type">
                <Droppable droppableId={currentQuestion.id}>
                    {provided => (
                        <ul
                            {...provided.droppableProps}
                            className="question-solution-type__variants"
                            ref={provided.innerRef}
                            innerRef={provided.innerRef}
                        >
                            {
                                currentQuestion.answers.map((answer, index) => (
                                    <Draggable draggableId={answer.id} index={index}>
                                        {providedItem => (
                                            <li
                                                className="question-solution-type__variants__item"
                                                {...providedItem.draggableProps}
                                                {...providedItem.dragHandleProps}
                                                ref={providedItem.innerRef}
                                                innerRef={providedItem.innerRef}
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
    );
}

export default SortAnswers;