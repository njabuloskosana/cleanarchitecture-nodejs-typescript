import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

class Database{
    public sequelize: Sequelize | undefined
    
    private POSTGERES_DB = process.env.POSTGERES_DB as string;
    private POSTGERES_HOST = process.env.POSTGERES_HOST as string;
    private POSTGERES_PORT = process.env.POSTGERES_PORT as unknown as number;
    private POSTGERES_USER = process.env.POSTGERES_USER as string;
    private POSTGERES_PASSWORD = process.env.POSTGERES_PASSWORD as string;

    constructor() {
        this.connectToPostgreSQL();
    }

    private async connectToPostgreSQL() {
        this.sequelize = new Sequelize({
            database: this.POSTGERES_DB,
            username: this.POSTGERES_USER,
            password: this.POSTGERES_PASSWORD,
            host: this.POSTGERES_HOST,
            port: this.POSTGERES_PORT,
            dialect:"postgres"
        })

        this.sequelize.authenticate().then(() => {
            console.log("PostgreSQL Connection has been established successfully.");
        }).catch((error) => [
            console.log("PostgreSQL Connection failed.",error)
        ]);
        
    }

    


}

export default Database;