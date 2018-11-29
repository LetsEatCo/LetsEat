export const isIterable = (input: any): input is Iterable<any> =>
	input !== null && typeof input[Symbol.iterator] === 'function';
