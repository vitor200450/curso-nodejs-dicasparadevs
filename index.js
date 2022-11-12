import dotenv from "dotenv"; // Biblioteca para variáveis de ambiente

import connectToDatabase from "./src/database/connect.js";

dotenv.config();

connectToDatabase();

import "./modules/express.js";

// import "./modules/path.js";
// import "./modules/fs.js";
// import "./modules/http.js";

// import { Person } from "./person.js";
// const person = new Person("Vitor");
// console.log(person.sayMyName());
