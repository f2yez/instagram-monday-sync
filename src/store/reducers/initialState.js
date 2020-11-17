var state = {
	common: {
		loading: false,
		isAuthenticated: false,
		user: {
			id: null,
			name: null,
		},
		boards: [],
		items: [],
		item: {
			id: null,
			name: ""
		},
	}
}

export default state;
