import UserModel from '../Modules/UserModel.js'
import Mail from '../Libraries/Mail.js'
import Salt from '../Libraries/Salt.js'
import Hashpass from '../Libraries/Hashpassword.js'
import Find_Data from '../Modules/Find_Data.js'
import Random from '../Libraries/RandomInt.js'
export default {
  all_users: (req, res) => {
    UserModel.getAll((err, result) => {
      if (err) { res.send(err)} 
      res.send({ users: result })
    })
  },
  add_user: (req,res) => {
    const salt = Salt()
    const rand = Random(8)
    const msgText = 'You Password : ' + rand
    const password = Hashpass(rand, salt)
    const newdata = {
      id_card: req.body.id_card,
      u_name: req.body.u_name,
      username: req.body.username,
      salt,
      password,
      email: req.body.email,
      u_phone: req.body.u_phone,
      u_address: req.body.u_address,
      u_created_at: new Date()
    }
    if (newdata) {
      Find_Data(req.body.username, 'username', 'username', 'users', (erruser, resuser) => {
        if (erruser) res.send(erruser)
        if (resuser) {
          res.json({ success: false, exituser: true })
        } else {
          Find_Data(req.body.u_email, 'email', 'email', 'users', (erremail, resemail) => {
            if (erremail) res.send(erremail)
            if (resemail) {
              res.json({ success: false, exitemail: true })
            } else {
              Find_Data(req.body.id_card, 'id_card', 'id_card', 'users', (errcard, rescard) => {
                if (errcard) res.send(errcard)
                if (rescard) {
                  res.json({ success: false, exitcard: true })
                } else {
                  UserModel.create_user(newdata, (err) => {
                    if (!err) {
                      Mail(req.body.email, 'Password', msgText)
                      res.json({ success: true })
                    } else {
                      res.json({ success: false })
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  },
  update_user: (req, res) => {
    const id = req.params.id
    const data = {
      u_name: req.body.u_name,
      u_phone: req.body.u_phone,
      u_address: req.body.u_address,
      u_updated_at: new Date()
    }

    if (id && data) {
      UserModel.update(id, data, (err) => {
        if (err) { res.send(err) }
        res.json({ success: true })
        res.end()
      })
    } else {
      res.json({ success: false })
    }
  },
  delete_user: (req,res) => {
    UserModel.delete(req.params.id, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.json({ success: true })
      }
    })
  }
}