import { NextApiRequest, NextApiResponse } from "next";
import { ConnectionPool, config } from "mssql";
import { Journal } from "../../../utils/dataTypes";

export default async function updateJournal(
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
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    server: process.env.DATABASE_URL,
    database: "",
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  };

  const query = `use automation_workplace;
    UPDATE Journal SET ObjectID = '${ObjectID}',
    EmployeeID = '${EmployeeID}',
    ResponsiblePersonID = '${ResponsiblePersonID}',
    ViolationID = '${ViolationID}',
    RecordDate = '${RecordDate}'
    WHERE ID_Journal = '${ID_Journal}'`;

  const pool = new ConnectionPool(sqlConfig);
  try {
    await pool.connect();
    const result = await pool.query(query);
    res.status(200).json({ result });
  } catch (e) {
    console.log(e);
    res.status(418).json({ message: "Something went wrong" });
  }
}
