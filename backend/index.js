import express from "express";
import db from "./config/Database.js";
// import Users from "./models/UsersModel.js";
import router from "./routers/index.js";
const app = express();

try {
    await db.authenticate();
    console.log('Database terkoneksi dengan baik');
    // await Users.sync();
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('server berjalan pada port 5000'));