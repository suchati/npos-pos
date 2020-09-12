import HomeModel from '../Modules/HomeModel.js'
const date = new Date()
const year = date.getFullYear() // 2020
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export default {
  chartmonth: (req, res) => {
    const month = months[date.getMonth()] // 0-11 -> 1-12
    HomeModel.chart_month(month, year, (err, result) => {
      if (!err) {
        res.json({ month: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  },

  chartyear: (req, res) => {
    HomeModel.chart_year(year , (err, result) => {
      if (!err) {
        res.send({ year: result, success: true })
      } else {
        res.json({ year: [], success: false })
      }
    })
  },
/* 
  productsaletoday: (req, res) => {
    const today = date.toISOString().split('T')[0] // 2020-07-31
    HomeModel.product_sale_today(today , (err, result) => {
      if (!err) {
        res.send({ today: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  },

  all_user: (req, res) => {
    HomeModel.all_user((err, result) => {
      if (!err) {
        res.send({ user: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  },

  all_products: (req, res) => {
    HomeModel.all_products((err, result) => {
      if (!err) {
        res.send({ product: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  },

  saletoday: (req, res) => {
    const D = date.getDate()
    const M = months[date.getMonth()]
    const Y = year
    HomeModel.sale_today(D, M, Y, (err, result) => {
      if (!err) {
        res.send({ sale_d: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  },

  saletomonth: (req, res) => {
    const M = months[date.getMonth()]
    const Y = year
    HomeModel.sale_tomonth(M, Y, (err, result) => {
      if (!err) {
        res.send({ sale_m: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  },
  
  saletoyear: (req, res) => {
    const Y = year
    HomeModel.sale_toyear(Y, (err, result) => {
      if (!err) {
        res.send({ sale_y: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  },

  notifications: (req, res) => {
    HomeModel.notifications((err, result) => {
      if (!err) {
        res.send({ stock: result, success: true })
      } else {
        res.json({ success: false })
      }
    })
  } */
}