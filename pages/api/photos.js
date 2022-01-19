import nasa_api from '../../lib/nasa-api';

const rovers = ['curiosity', 'spirit', 'opportunity', 'perseverance'];

export default async function handler(req, res) {
	const { rover, date } = req.query;

	try {
		const { data: rover_data } = await nasa_api.get(
			`/rovers/${rover}/photos?earth_date=${date}`
		);

		let { photos } = rover_data;

		photos = photos.map((r) => ({
			id: r['id'],
			sol: r['sol'],
			camera_name: r['camera']['full_name'],
			img_src: r['img_src'],
			rover: r['rover']['name'].toLowerCase(),
			date: r['earth_date'],
		}));

		photos = photos.splice(0, 25);
		res.json(photos);
	} catch (error) {
		console.log(error);
	}
}
