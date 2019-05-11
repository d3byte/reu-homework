export const reducer = (state, action) => {
	switch (action.type) {
		case 'update-answers':
			return {
				...state,
				currentQuestion: {
					...state.currentQuestion,
					answers: action.payload
				}
			}

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

		case 'tick-time':
			return {
				...state,
				timeLeft: action.payload
			}
		
		case 'select-multiple-answers':
		case 'select-answer':
			return {
				...state,
				currentQuestion: {
					...state.currentQuestion,
					givenAnswer: action.payload
				}
			}

	  default:
			return state;
	}
};