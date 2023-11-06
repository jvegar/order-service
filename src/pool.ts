import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "docker",
  database: "clearlens",
  port: 5432,
});

pool.on("connect", (client) => {
  client.query(`SET search_path TO order_service, public`);
});
