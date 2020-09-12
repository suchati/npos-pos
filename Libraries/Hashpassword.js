import crypto from 'crypto'
const md5 = string => {
   return crypto.createHash('md5').update(string).digest('hex');
}

export default (password, salt) => {
    const hash = md5(password + salt)
    const SH = salt + hash
    return Buffer.from(SH).toString('base64')
  }
  