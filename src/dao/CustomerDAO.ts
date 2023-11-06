import { PoolClient } from "pg";

export class CustomerDAO {
  public client: PoolClient;
  constructor(client: PoolClient) {
    this.client = client;
  }

  public async addCustomer(
    displayName: string,
    email: string,
    telephone: string
  ) {
    const result = await this.client.query(
      `
            INSERT INTO customers (display_name, email, telephone)
            VALUES (
                $1, $2, $3
            )
        `,
      [displayName, email, telephone]
    );
    return result;
  }
}
