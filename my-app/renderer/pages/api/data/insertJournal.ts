import { NextApiRequest, NextApiResponse } from "next";
import { Journal } from "../../../utils/dataTypes";
import { env } from "../../../env.mjs";
import { ConnectionPool, config } from "mssql";

export default async function insertJournal(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    ID_Journal,
    ObjectID,
    EmployeeID,
    ResponsiblePersonID,
    ViolationID,
    RecordDate,
  } = req.body as Journal;

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
    INSERT INTO Journal (ID_Journal, ObjectID, EmployeeID, ResponsiblePersonID, ViolationID, RecordDate)
    VALUES ('${ID_Journal}', '${ObjectID}', '${EmployeeID}', '${ResponsiblePersonID}', '${ViolationID}', '${RecordDate}');
  `;

  const pool = new ConnectionPool(sqlConfig);
  try {
    await pool.connect();
    await pool.query(query);
    res
      .status(200)
      .json({ message: "Successfully inserted date to the Journal table" });
  } catch (e) {
    console.log(e);
    res.status(418).json({ message: "Something went wrong" });
  }
}
