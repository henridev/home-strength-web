export const state = {
	user: null,
	serviceTypes: [
		{
			value: 'delivery',
			label: 'Delivery',
			checked: false
		},
		{
			value: 'curbside',
			label: 'Curbside',
			checked: false
		},
		{
			value: 'orderin',
			label: 'Order In',
			checked: false
		}
	],
	sortTypes: [
		{
			value: 'distance',
			label: 'Distance',
			checked: false
		},
		{
			value: 'popular',
			label: 'Popularity',
			checked: false
		},
		{
			value: 'topRated',
			label: 'Top Rated',
			checked: false
		},
		{
			value: 'atoz',
			label: 'A to Z',
			checked: false
		}
	],
	categories: [
		{label: 'Weights', name: 'weights', checked: false},
		{
			label: 'Resistance bands',
			name: 'bands',
			checked: false
		},
		{
			label: 'Jump rope',
			name: 'ropes',
			checked: false
		}
	]
}
