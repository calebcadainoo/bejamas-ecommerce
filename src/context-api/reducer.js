
export const initialState = {
	products: null,
}

export const actionTypes = {
	SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
}

const reducer = (state, action) => {

	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				products: action.products,
			}
		default:
			return state
	}
}

export default reducer 