import db from '../Config/connect_database.js'
export default (data, select, where, table, result) => {
	const sql = `SELECT ${select} FROM ${table} WHERE ${where} = ?`
    db.get(sql, data, (err, res) => {
      if (err) {
        return result(null, err)
      } else {
        return result(null, res)
      }
    })
}