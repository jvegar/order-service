import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { CustomerDAO } from "./dao/CustomerDAO";
import { pool } from "./pool";

dotenv.config();

const app: Express = express();
const port = process.env.EXPRESS_PORT;

app.use(bodyParser.json());

app.post("/customers", async (req: Request, res: Response) => {
  const { displayName, email, telephone } = req.body;
  const customerDAO = new CustomerDAO(await pool.connect());
  const customerId = await customerDAO.addCustomer({
    displayName,
    email,
    telephone,
  });

  res.status(200).json({
    message: "Data received successfully",
    customerId,
  });
});

app.get("/customers/:customerId", async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const customerDAO = new CustomerDAO(await pool.connect());
  const customer = await customerDAO.getCustomer(customerId);

  res.status(200).json({
    customer,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
