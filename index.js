import express from 'express'
import pkg from 'body-parser'
import cors from 'cors'
import history from 'connect-history-api-fallback'
import fileUpload from 'express-fileupload'
import session from 'express-session'
import Route from './Routes/index.js'
const app = express()
const { urlencoded, json } = pkg
app.use(cors())
app.use(fileUpload())
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(history())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})
app.use(Route)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server run in : http://localhost:${PORT}`)
});