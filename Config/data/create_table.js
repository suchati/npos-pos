export default {
  // USERS
  users: `CREATE TABLE IF NOT EXISTS users (	
    u_id INTEGER,
    id_card INTEGER UNIQUE,
    u_name TEXT,
    email TEXT UNIQUE,
    username TEXT UNIQUE,
    password TEXT,
    salt TEXT,
    u_address TEXT,
    u_phone INTEGER,
    u_type TEXT,
    code TEXT,
    u_created_at TEXT,
    u_updated_at TEXT,
    login_at, TEXT,
    PRIMARY KEY(u_id AUTOINCREMENT)
  )`,

  // PRODUCTS
  products: `CREATE TABLE IF NOT EXISTS products (
    p_id INTEGER,
    p_code TEXT UNIQUE,
    p_name TEXT,
    cost_price REAL,
    sale_price REAL,
    stock INTEGER,
    unit TEXT,
    discontinued INTEGER,
    p_details TEXT,
    p_img TEXT,
    category INTEGER,
    supplier INTEGER,
    p_created_at TEXT,
    p_updated_at TEXT,
    PRIMARY KEY(p_id AUTOINCREMENT)
  )`,

  // SALES
  sales: `CREATE TABLE IF NOT EXISTS sales (
    s_id INTEGER,
    s_order TEXT UNIQUE,
    s_total REAL,
    s_get REAL,
    s_change REAL,
    payment INTEGER,
    s_user INTEGER,
    customer INTEGER,
    s_date TEXT,
    s_d TEXT,
    s_m TEXT,
    s_y TEXT,
    PRIMARY KEY(s_id AUTOINCREMENT)
  )`,

  // SALESDETAILS
  saledetails: `CREATE TABLE IF NOT EXISTS saledetails (
    sd_id INTEGER,
    sd_order INTEGER,
    sd_product INTEGER,
    sd_price REAL,
    qty INTEGER,
    sd_date TEXT,
    PRIMARY KEY(sd_id AUTOINCREMENT)
  )`,

  // CATEGORYS
  categorys: `CREATE TABLE IF NOT EXISTS categorys (
    c_id INTEGER,
    c_name TEXT,
    c_details TEXT,
    c_created_at TEXT,
    c_updated_at TEXT,
    PRIMARY KEY(c_id AUTOINCREMENT)
  )`,

  // CUSTOMERS
  customers: `CREATE TABLE IF NOT EXISTS customers (
    cus_id INTEGER,
    cus_code TEXT UNIQUE,
    cus_name TEXT,
    cus_email TEXT,
    cus_phone	TEXT,
    cus_address TEXT,
    cus_type TEXT,
    cus_created_at TEXT,
    cus_updated_at TEXT,	
    PRIMARY KEY(cus_id AUTOINCREMENT)
  )`,

  //CUSTOME_TYPE
  customertype: `CREATE TABLE IF NOT EXISTS customertype (
    ct_id INTEGER,
    ct_name TEXT,
    ct_details TEXT,	
    PRIMARY KEY(ct_id AUTOINCREMENT)
  )`,

  // PAYMENTMETHOD
  paymentmethod: `CREATE TABLE IF NOT EXISTS paymentmethod (
    pay_id INTEGER,
    pay_type TEXT,
    pay_details TEXT,	
    PRIMARY KEY(pay_id AUTOINCREMENT)
  )`,

  // SUPPLIERS
  suppliers: `CREATE TABLE IF NOT EXISTS suppliers (
    sup_id INTEGER,
    sup_company TEXT,
    sup_contac TEXT,
    sup_address TEXT,
    sup_phone INTEGER,
    sup_email TEXT,
    sup_website TEXT,
    sup_created_at TEXT,
    sup_updated_at TEXT,
    PRIMARY KEY(sup_id AUTOINCREMENT)
  )`

}