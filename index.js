import express from "express";
import bodyParser from "body-parser";
import employeesRoutes from "./routes/employees.js";
import { connectToDatabase } from "./db.js";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 5000;

connectToDatabase().catch(console.error);

app.use(bodyParser.json());

app.use("/employees", employeesRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Homepage.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
