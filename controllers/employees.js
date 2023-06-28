import { client } from "../db.js";
import { ObjectId } from "mongodb";

export const createEmployee = async (req, res) => {
  const newEmployee = req.body;
  try {
    const employeesCollection = client.db("database").collection("employees");
    await employeesCollection.insertOne(newEmployee);
    res.send(
      `Employee added successfully. Employee name: ${newEmployee.firstName} ${newEmployee.lastName}`
    );
  } catch (error) {
    console.error("Error creating employee", error);
    res.status(500).json({ error: "Failed to create employee" });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const employeesCollection = client.db("database").collection("employees");
    const employees = await employeesCollection.find().toArray();
    res.send(employees);
  } catch (error) {
    console.error("Error retrieving employees", error);
    res.status(500).json({ error: "Failed to retrieve employees" });
  }
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employeesCollection = client.db("database").collection("employees");
    const foundEmployee = await employeesCollection.findOne({
      _id: new ObjectId(id),
    });
    if (foundEmployee) {
      res.send(foundEmployee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error retrieving employee", error);
    res.status(500).json({ error: "Failed to retrieve employee" });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employeesCollection = client.db("database").collection("employees");
    const foundEmployee = await employeesCollection.findOne({
      _id: new ObjectId(id),
    });
    if (foundEmployee) {
      employeesCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(`Employee with id ${id} deleted.`);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error retrieving employee", error);
    res.status(500).json({ error: "Failed to retrieve employee" });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employeesCollection = client.db("database").collection("employees");
    const foundEmployee = await employeesCollection.findOne({
      _id: new ObjectId(id),
    });
    if (foundEmployee) {
      employeesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
      );
      res.send(`Employee with id ${id} updated.`);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error retrieving employee", error);
    res.status(500).json({ error: "Failed to retrieve employee" });
  }
};
