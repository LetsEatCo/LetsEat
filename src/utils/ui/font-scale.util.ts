const px2rem = (v: any): any => `${v / 16}rem`;

export function fontScale(v: any): any {
	const base = 16;
	const ratio = 1.2;

	if (!Array.isArray(base) || base.length === 1) {
		return px2rem(Math.pow(ratio, v) * base);
	}

	const baseHigh = Math.pow(ratio, 1) * base[0];
	for (let i = 1; i < base.length; i++) {
		while (base[i] / 1 < base[0] / 1) {
			base[i] = Math.pow(ratio, 1) * base[i];
		}
		while (base[i] / 1 >= baseHigh) {
			base[i] = Math.pow(ratio, -1) * base[i];
		}
	}
	base.sort();
	const rBase = Math.round((v / base.length - Math.floor(v / base.length)) * base.length);

	return px2rem(Math.pow(ratio, Math.floor(v / base.length)) * base[rBase]);
}
