import { NextApiRequest, NextApiResponse } from "next";
import { Journal } from "../../../utils/dataTypes";
import { env } from "../../../env.mjs";
import { ConnectionPool, config } from "mssql";

export default async function deleteJournalRecord(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { ID_Journal } = req.body as Journal;

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

  const query = `
    USE automation_workplace;
    DELETE FROM Journal WHERE ID_Journal = '${ID_Journal}';
  `;

  const pool = new ConnectionPool(sqlConfig);
  try {
    await pool.connect();
    await pool.query(query);
    res
      .status(200)
      .json({ message: "Successfully deleted record from the Journal table" });
  } catch (e) {
    console.log(e);
    res.status(418).json({ message: "Something went wrong" });
  }
}
