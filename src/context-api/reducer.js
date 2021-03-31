import JsonData from  '../sample-data.json'


export const initialState = {
	products: Object.entries(JsonData)[0][1],
	productsCurrent: Object.entries(JsonData)[0][1],
	mobileFilterBag: false,
}

export const actionTypes = {
	SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
	SET_FILTER_MOBILE: 'SET_FILTER_MOBILE',
	GENERATE_PRODUCT_LIST: 'GENERATE_PRODUCT_LIST',
}

const reducer = (state, action) => {

	switch (action.type) {
		case actionTypes.SET_PRODUCT_LIST:
			return {
				...state,
				products: action.products,
			}
		case actionTypes.SET_FILTER_MOBILE:
			return {
				...state,
				mobileFilterBag: action.mobileFilterBag,
			}
		case actionTypes.GENERATE_PRODUCT_LIST:
			return {
				...state,
				productsCurrent: action.productsCurrent,
			}
		default:
			return state
	}
}

export default reducer 