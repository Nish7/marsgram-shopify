import nasa_api from '../../lib/nasa-api';

export default async function handler(req, res) {
	// List of Rovers
	const { data: rover_data } = await nasa_api.get('/rovers');
	let { rovers } = rover_data;

	rovers = rovers.map((r) => ({
		name: r['name'].toLowerCase(),
		landing_date: r['landing_date'],
		launch_date: r['launch_date'],
		max_sol: r['max_sol'],
		max_date: r['max_date'],
		total_photos: r['total_photos'],
	}));

	res.status(200).json(rovers);
}
