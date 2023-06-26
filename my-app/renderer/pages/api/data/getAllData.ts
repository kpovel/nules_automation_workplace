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

    const personData = await pool.query(
      `use automation_workplace;
        SELECT * FROM Person`
    );
    const responsiblePersonData = await pool.query(
      `use automation_workplace;
        SELECT * FROM ResponsiblePerson`
    );
    const employeeData = await pool.query(
      `use automation_workplace;
        SELECT * FROM Employee`
    );
    const inspectionObjectData = await pool.query(
      `use automation_workplace;
        SELECT * FROM InspectionObject`
    );
    const violationData = await pool.query(
      `use automation_workplace;
        SELECT * FROM Violation`
    );
    const journalData = await pool.query(
      `use automation_workplace;
        SELECT * FROM Journal`
    );

    res.status(200).json({
      person: personData.recordset,
      responsiblePerson: responsiblePersonData.recordset,
      employee: employeeData.recordset,
      inspectionObject: inspectionObjectData.recordset,
      violation: violationData.recordset,
      journal: journalData.recordset,
    });
  } catch (e) {
    console.log(e);
  } finally {
    await pool.close();
  }
}
