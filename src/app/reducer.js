export const reducer = (state, action) => {
	switch (action.type) {
	  case 'select-question':
			return {
				...state,
				currentQuestion: action.payload
			};

		case 'edit-question':
			return {
				...state,
				questions: state.questions.map(question => {
					if (question.id === action.payload.id) {
						return action.payload;
					}
					return question;
				})
			}
		
	  default:
			return state;
	}
};