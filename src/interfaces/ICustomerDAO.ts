import { PoolClient } from "pg";

export interface Customer {
  displayName: string;
  email: string;
  telephone: string;
}

export interface ICustomerDAO {
  client: PoolClient;
  addCustomer: (customer: Customer) => Promise<number>;
  getCustomer: (id: string) => Promise<Customer>;
}
