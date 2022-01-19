import axios from 'axios';

export default async function handler(req, res) {
	try {
		const { date } = req.query;
		const { data: rovers } = await axios.get(
			'https://marsgram.vercel.app/api/rovers'
		);

		let feed = [];

		for (const r of rovers) {
			const { data: r_photos } = await axios.get(
				`https://marsgram.vercel.app/api/photos?rover=${r.name}&date=${date}`
			);

			feed.push(...r_photos);
		}

		// feed = shuffle(feed);
		res.status(200).json(feed);
	} catch (error) {
		console.log(error);
	}
}
