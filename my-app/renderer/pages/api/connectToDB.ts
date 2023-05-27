import sql from 'mssql';
import {env} from "../../env.mjs";

export default async function (req, res) {
  const sqlConfig = {
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    server: env.DATABASE_URL,
    database: "",
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  }

  try {
    await sql.connect(sqlConfig);
    res.status(200).json({message: 'Connected successfully!'});
  } catch (err) {
    console.log(err)
    res.status(500).json({message: `Error connecting to the DB: ${err}`});
  }
}
