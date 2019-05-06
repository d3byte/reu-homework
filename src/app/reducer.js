export const reducer = (state, action) => {
	switch (action.type) {
	  case 'select-question':
			return {
				...state,
				currentQuestion: action.payload
			};
		
	  default:
			return state;
	}
};