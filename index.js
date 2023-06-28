import express from "express";
import bodyParser from "body-parser";
import employeesRoutes from "./routes/employees.js";
import { connectToDatabase } from "./db.js";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin (replace '*' with your specific origin if needed)
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
  next();
});

connectToDatabase().catch(console.error);

app.use(bodyParser.json());

app.use(cors());

app.use("/employees", employeesRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Homepage.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
