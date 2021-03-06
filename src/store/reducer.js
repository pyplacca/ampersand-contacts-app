export const rootState = {
	signedIn: false,
	user: {},
}

function rootReducer (state=rootState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'sign_in':
			return {
				...state,
				signedIn: true,
				user: payload
			}

		case 'register':
			return {
				...state,
				user: payload,
				signedIn: true
			}

		case 'sign_out':
			return {
				...state,
				user: {},
				signedIn: false
			}

		default: return state
	}
}

export default rootReducer;
