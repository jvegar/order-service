import { PoolClient } from "pg";
import { Customer, ICustomerDAO } from "../interfaces/ICustomerDAO";

export class CustomerDAO implements ICustomerDAO {
  public client: PoolClient;
  constructor(client: PoolClient) {
    this.client = client;
  }

  public async addCustomer(customer: Customer) {
    const result = await this.client.query(
      `
            INSERT INTO customers (display_name, email, telephone)
            VALUES (
                $1, $2, $3
            )
            RETURNING customer_id
        `,
      [customer.displayName, customer.email, customer.telephone]
    );
    return result.rows[0].customer_id;
  }

  public async getCustomer(id: string) {
    const result = await this.client.query(
      `
        SELECT * FROM customers
        WHERE customer_id = $1
        `,
      [id]
    );

    return result.rows[0];
  }
}
