export const selectQuestion = (question, dispatch) => dispatch({
    type: 'select-question',
    payload: question
});