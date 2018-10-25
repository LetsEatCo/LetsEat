import FontFaceObserver from 'fontfaceobserver';

const Font = () => {
	const link = document.createElement('link');
	link.href = 'https://s3.eu-west-3.amazonaws.com/lets-eat-co/fonts/fonts.css';
	link.rel = 'stylesheet';

	// @ts-ignore
	document.head.appendChild(link);

	const LetsEat = new FontFaceObserver('LetsEatStd');

	LetsEat.load().then(() => {
		// @ts-ignore
		document.documentElement.classList.add('LetsEatStd');
	});
};

export default Font;
