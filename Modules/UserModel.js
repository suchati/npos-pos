import db from '../Config/connect_database.js'
export default {
  getAll: (result) => {
    const sql = 'SELECT  * FROM users'
    db.all(sql, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },
  create_user: (data, result) => {
    const sql = 'INSERT INTO users(id_card, u_name, email, username, password, salt, u_address, u_phone, u_created_at) VALUES (?,?,?,?,?,?,?,?,?)'
    db.run(sql, [data.id_card, data.u_name, data.email, data.username, data.password, data.salt, data.u_address, data.u_phone, data.u_created_at], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null,  res)
      }
    })
  },
  update: (id, data, result) => {
    const sql = 'UPDATE users SET u_name = ?, u_phone = ?, u_address = ?, u_updated_at = ? WHERE u_id = ?'
    db.run(sql, [data.u_name, data.u_phone, data.u_address, data.u_updated_at, id], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },
  delete: (id, result) => {
    const sql = 'DELETE FROM users WHERE u_id = ?'
    db.run(sql, id, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  }
}
