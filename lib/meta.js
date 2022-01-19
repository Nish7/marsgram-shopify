export default function meta(url) {
	const img = new Image();
	img.src = url;

	img.onLoad(() => {
		return { width: this.naturalWidth, height: this.naturalHeight };
	});
}
