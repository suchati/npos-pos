export default () => {
	const len = 16
	const set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ'
	const setLen = set.length
	let salt = ''
	for (let i = 0; i < len; i++) {
		const p = Math.floor(Math.random() * setLen)
		salt += set[p]
	}
	return salt
}