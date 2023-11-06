"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    password: "docker",
    database: "clearlens",
    port: 5432,
});
exports.pool.on("connect", (client) => {
    client.query(`SET search_path TO order_service, public`);
});
