import {
	UPDATE_SERVICE_TYPES,
	UPDATE_CATEGORIES,
	UPDATE_SORT_TYPES
} from '../types/shopTypes'

export const reducer = (state, action) => {
	switch (action.type) {
	case UPDATE_SERVICE_TYPES:
		return {
			...state,
			serviceTypes: state.serviceTypes.map(serviceType => {
				if (serviceType.value === action.payload) {
					serviceType.checked = !serviceType.checked
				} else {
					serviceType.checked = false
				}
				return serviceType
			})
		}
	case UPDATE_SORT_TYPES:
		return {
			...state,
			sortTypes: state.sortTypes.map(sortType => {
				if (sortType.value === action.payload) {
					sortType.checked = !sortType.checked
				} else {
					sortType.checked = false
				}
				return sortType
			})
		}
	case UPDATE_CATEGORIES:
		return {
			...state,
			categories: state.categories.map(category => {
				if (category.name === action.payload.name) {
					category.checked = action.payload.value
				}
				return category
			})
		}

	default:
		return state
	}
}
