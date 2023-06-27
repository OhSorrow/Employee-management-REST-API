import express from "express";
import {
  createEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employees.js";

const router = express.Router();

router.get("/", getEmployees);

router.get("/:id", getEmployee);

router.post("/", createEmployee);

router.delete("/:id", deleteEmployee);

router.patch("/:id", updateEmployee);

export default router;
