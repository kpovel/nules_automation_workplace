import { config, ConnectionPool } from "mssql";
import { env } from "../../../env.mjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const sqlConfig: config = {
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    server: env.DATABASE_URL,
    database: "",
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  };

  const pool = new ConnectionPool(sqlConfig);
  try {
    await pool.connect();
    const journalData = await pool.query(
      `use automation_workplace;
        SELECT * FROM Journal`
    );

    res.status(200).json({ journalData: journalData.recordset });
  } catch (e) {
    console.log(e);
  } finally {
    pool.close();
  }
}
