const express = require("express");
// custom import 
const employeesController = require("../../../controllers/employees.controller");
const authUtil = require("../../../utils/auth.util");

const router = express.Router();

// api endpoint for listing employees -- localhost:3001/api/v1/employees - GET Method
router.get("/",  employeesController.getEmployees);

router.post("/", employeesController.addEmployee);

// protecting this api endpoint with Bearer Token
router.get("/:id", authUtil.required, employeesController.getEmployeeDetails);

router.put("/:id", employeesController.updateEmployeeDetails);

// TODO: Try to implement DELETE method

module.exports = router;
