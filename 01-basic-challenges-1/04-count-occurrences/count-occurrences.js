function countOccurrences(str, char) {
	let count = 0;

	str.split('').forEach((item) => item === char && count++);
	return count;
}

module.exports = countOccurrences;
