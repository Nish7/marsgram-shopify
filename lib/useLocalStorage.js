import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
	const initialize = (key) => {
		try {
			const item = localStorage.getItem(key);
			if (item && item !== 'undefined') {
				return JSON.parse(item);
			}

			localStorage.setItem(key, JSON.stringify(defaultValue));
			return defaultValue;
		} catch {
			return defaultValue;
		}
	};

	const [state, setState] = useState(null); // problem is here

	// solution is here....
	useEffect(() => {
		setState(initialize(key));
	}, []);

	const toggleLike = (id) => {
		try {
			const liked = state.includes(id);

			if (liked) {
				const newVal = [...state].filter((e) => e !== id);
				setState(newVal);
				localStorage.setItem(key, JSON.stringify(newVal));
			} else {
				setState([...state, id]);
				localStorage.setItem(key, JSON.stringify([...state, id]));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return [state, toggleLike];
};
