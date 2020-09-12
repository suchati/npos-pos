import db from '../Config/connect_database.js'
export default {
  update: (id, data, result) => {
    const sql = 'UPDATE users SET code = ? WHERE u_id = ?'
    db.run(sql, [data, id], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

  update_password: (id, data, result) => {
    const sql = 'UPDATE users SET password = ?, salt = ?, code = ?, u_updated_at = ? WHERE u_id = ?'
    db.run(sql, [data.password, data.salt, data.code, data.u_updated_at, id], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  }
}