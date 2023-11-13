import { PoolClient } from "pg";

export interface Order {
  id: number;
  customerID: number;
  createdAt: Date;
}

export interface IOrderDAO {
  client: PoolClient;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addOrder: (order: Order) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOrder: (id: number) => Promise<any>;
}
