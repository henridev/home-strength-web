import {
	updateServiceType,
	updateSort,
	updateCategories,
} from './actions/shopActions'
import {useContent,useSiteMetaData} from './graphql/hooks'
import {reducer} from './reducer/shopReducer'
import {state} from './states/shopState'
import contextCreator from './createDataContext'

export const {Context, Provider} = contextCreator(
	reducer,
	{
		updateServiceType,
		updateSort,
		updateCategories,
	},
	{
		useSiteMetaData,
		useContent
	},
	state
)
