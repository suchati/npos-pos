import LoginModel from '../Modules/LoginModel.js'
import Find_Data from '../Modules/Find_Data.js'
import Hashpass from '../Libraries/Hashpassword.js'
import jwt from 'jsonwebtoken'
import Random from '../Libraries/RandomInt.js'
import Mail from '../Libraries/Mail.js'
import Salt from '../Libraries/Salt.js'
const DateTime = new Date()
const Time = `${DateTime.getFullYear()}-${DateTime.getMonth()+1}-${DateTime.getDate()}`
export default {
  check_username: (req, res) => {
    const username = req.body.username
    if (username) {
      Find_Data(username, 'username', 'username', 'users', (err, result) => {
        if (!err) {
          if (result) {
            if (username === result.username) {
              res.json({ success: true })
            } else {
              res.json({ success: false })
            }
          } else {
            res.json({ success: false })
          }
        } else { 
          res.send(err)
        }
      })
    } else {
      res.json({ success: false }) 
    }
  },

  check_password: (req, res) => {
    const username = req.body.username
    Find_Data(username, '*', 'username', 'users', (err, result) => {
      if (!err)
        if (result){
          const password = Hashpass(req.body.password, result.salt)
          if (username === result.username && password === result.password){
            const authUser = {
              username: result.username,
              id_card: result.id_card,
              u_name: result.u_name,
              email: result.email,
              u_phone: result.u_phone,
              u_address: result.u_address
            }
            const data = { login_at: Time }
            LoginModel.update(result.u_id, data, (error) => {
              if (!error) {
                const token = jwt.sign(authUser, 'shhhhh')
                req.session.auth = token
                res.json({ success: true, auth: token })
              } else {
                res.send(error)
              }
            })
          } else {
            res.json({ success: false })
          }
        } else { 
          res.json({ success: false })
        }
      else
        res.send(err)
    })
  },

  forgot_password : (req,res) => {
    const email = req.body.email
    Find_Data(email, '*', 'email', 'users', (err, result) => {
      if (!err) {
        if (result) {
          const rand = Random(6)
          const Text = `Code Reset Password : ${rand}`
          const id = result.u_id
          LoginModel.update(id, rand, (error) => {
            if (!error) {
              Mail(email, 'Code Reset', Text)
              res.json({ success: true, id })
            } else {
              res.json({ success: false, Nosend: true })
            }
          })
        } else {
          res.json({ success: false })
        }
      } else {
        res.send(err) 
      }
    })
  },

  reset_password: (req, res) => {
    const id = req.body.id
    const code = req.body.code
    const salt = Salt()
    const password = Hashpass(req.body.new_pass, salt)
    const data = {
      password,
      salt,
      code: '',
      u_updated_at: Time
    }
    Find_Data(id, '*', 'u_id', 'users', (err, result) => {
      if (!err) {
        if (result) {
          if (code === result.code) {
            LoginModel.update_password(id, data, (error) => {
              if (!error) {
                res.json({ success: true })
              } else {
                res.json({ success: false })
              }
            })
          }
        }
      }
    })
  }
}