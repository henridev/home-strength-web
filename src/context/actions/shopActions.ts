import {
	UPDATE_SERVICE_TYPES,
	UPDATE_CATEGORIES,
	UPDATE_SORT_TYPES
} from '../types/shopTypes'


export const updateServiceType = dispatch => value =>
	dispatch({
		type: UPDATE_SERVICE_TYPES,
		payload: value
	})

export const updateSort = dispatch => value =>
	dispatch({
		type: UPDATE_SORT_TYPES,
		payload: value
	})

export const updateCategories = dispatch => (name, value) => {
	dispatch({
		type: UPDATE_CATEGORIES,
		payload: {name, value}
	})
}

