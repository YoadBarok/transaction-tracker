import { Sequelize, Dialect } from "sequelize";

export const db = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT as Dialect,
        logging: false
    }
);
