import { ConnectionPool } from "mssql";
import { env } from "../../env.mjs";

export default async function (req, res) {
  const { login, password } = req.body as {
    login: string;
    password: string;
  };

  const sqlConfig = {
    user: login,
    password,
    server: env.DATABASE_URL,
    database: "",
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  };

  try {
    const pool = new ConnectionPool(sqlConfig);
    await pool.connect();
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(401).json({ message: "Invalid username or password" });
  }
}
