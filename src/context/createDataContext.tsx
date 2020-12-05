import React, {useReducer, createContext} from 'react';

function contextCreator<T>(reducer, actions, dataHooks, initState) {
	const Context = createContext<T | null>(null);

	type Props = {
		children: JSX.Element | JSX.Element[];
	};

	const Provider: React.FC<Props> = ({children}) => {
		const [state, dispatch] = useReducer(reducer, initState);
		const boundActions = {};
		for (const key in actions) {
			boundActions[key] = actions[key](dispatch);
		}
		return <Context.Provider value={{state, ...boundActions, ...dataHooks}}>{children}</Context.Provider>;
	};

	return {Context, Provider};
}

export default contextCreator;
