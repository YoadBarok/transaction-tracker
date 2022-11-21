import env from 'dotenv';
env.config();
import { app } from "./server";
import {db} from "../config/databse"


(async () => {
    try {
        await db.sync(
            {
                force: false,
                alter: true
            }
        );
        app.listen(process.env.PORT, () => {
            console.log(`Express is listening on port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
})();
