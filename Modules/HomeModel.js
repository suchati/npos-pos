import db from '../Config/connect_database.js'
export default {
  chart_month: (month, year, result) => {
    const sql = `
      SELECT s_d, SUM(s_total) AS total
      FROM sales
      WHERE s_m = ? AND s_y = ?
      GROUP BY s_d `
    db.all(sql, [month, year], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

   chart_year: (year, result) => {
    const sql = `
      SELECT s_m, SUM(s_total) AS total 
      FROM sales 
      WHERE s_y = ? 
      GROUP BY s_m `
    db.all(sql, year, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },
/*
  product_sale_today: (today, result) => {
    const sql = `
      SELECT pd.p_name as p_name,(
      SELECT sum(qty) 
      FROM saledetails 
      WHERE product = pd.p_id AND sd_date
      BETWEEN ? AND ?
    ) as product_numall 
    FROM products as pd  
    ORDER BY product_numall 
    DESC LIMIT 5`
    db.query(sql, [today, today], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

  all_user: (result) => {
    const sql = 'SELECT COUNT(u_id) as user FROM users'
    db.query(sql, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

  all_products: (result) => {
    const sql = 'SELECT COUNT(p_id) as product FROM products'
    db.query(sql, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

  sale_today: (D, M, Y, result) => {
    const sql = `
      SELECT SUM(s_total) as total
      FROM sales 
      WHERE s_d = ?
      AND s_m = ?
      AND s_y = ? `
    db.query(sql, [ D, M, Y ], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

  sale_tomonth: (M, Y, result) => {
    const sql = `
      SELECT SUM(s_total) as total
      FROM sales
      WHERE s_m = ?
      AND s_y = ? `
    db.query(sql, [M, Y ], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

  sale_toyear: (Y, result) => {
    const sql = `
      SELECT SUM(s_total) as total
      FROM sales
      WHERE s_y = ? `
    db.query(sql, Y, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },

  notifications: (result) => {
    const sql = 'SELECT COUNT(stock) as stock FROM products WHERE stock <= ? '
    db.query(sql, 10, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  } */
}