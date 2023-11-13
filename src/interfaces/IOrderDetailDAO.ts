import { PoolClient } from "pg";

export interface OrderDetail {
  id: number;
  itemId: number;
}

export interface IOrderDetailDAO {
  client: PoolClient;
  addOrderDetail: (orderDetail: OrderDetail) => Promise<number>;
  getOrderDetail: (orderId: number) => Promise<OrderDetail>;
}
