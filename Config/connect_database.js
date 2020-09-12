import pkg from 'sqlite3'
import data from './data/create_table.js'
const { Database } = pkg
const db = new Database('Config/data/database.db', (err) => {
  if (!err) {
    db.run(data.users)
    db.run(data.products)
    db.run(data.sales)
    db.run(data.saledetails)
    db.run(data.categorys)
    db.run(data.customers)
    db.run(data.customertype)
    db.run(data.paymentmethod)
    db.run(data.suppliers)
  }
  
})
export default db