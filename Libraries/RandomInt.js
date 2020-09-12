export default (int) => {
	const set = '0123456789'
	const setLen = set.length
	let number = ''
	for (let i = 0; i < int; i++) {
		const p = Math.floor(Math.random() * setLen)
		number += set[p]
	}
	return number
}