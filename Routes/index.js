import express from 'express'
import Users from '../Controllers/UserController.js'
import Login from '../Controllers/LoginController.js'
import Home from '../Controllers/HomeController.js'
const Router = express.Router();

Router.post('/Home/chartmonth', Home.chartmonth)
Router.post('/Home/chartyear', Home.chartyear)

Router.post('/Home/productsaletoday', )
/*
Router.post('/Home/all_user', )
Router.post('/Home/all_Products', )
Router.post('/Home/saletoday', )
Router.post('/Home/saletomonth', )
Router.post('/Home/saletoyear', ) 
*/

Router.get('/users', Users.all_users)
Router.post('/user', Users.add_user)
Router.delete('/user/:id', Users.delete_user)
Router.put('/user/:id', Users.update_user)

Router.post('/login/username', Login.check_username)
Router.post('/login/password', Login.check_password)
Router.post('/forgot/password', Login.forgot_password)
Router.post('/reset/password', Login.reset_password)

export default Router