import axios from 'axios';
const api_key = process.env.API_KEY;

const nasa_api = axios.create({
	baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
	params: {
		api_key,
	},
});

export default nasa_api;
