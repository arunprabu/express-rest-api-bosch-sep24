// establishing connection with db
const Employee = require("../models/employees.model");

exports.getEmployees = (req, res) => {
  // 1. get the request from routes
  Employee.find()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

exports.addEmployee = (req, res) => {
  // 1. get the request from routes and req.body
  console.log(req.body);
  // 2. connect to database [ DONE -- Refer Line number 1]
  // 3. add the employee to the database
  const employeeDao = new Employee(req.body); // draft 
  employeeDao
    .save()
    .then((employee) => {
      res.json(employee); // 4. send the positive response to the routes
    })
    .catch((err) => {
      res.status(500).json({ message: err.message }); // 4. send the error response to the routes
    });
};

exports.getEmployeeDetails = (req, res) => {
  // id is the url parameter
  console.log(req.params); // we can get the id from the url parameter
  Employee.findOne({ _id: req.params.id })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

exports.updateEmployeeDetails = (req, res) => {
  // get the url parameter
  console.log(req.params.id);

  // get the form data from the request body
  console.log(req.body);

  Employee.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((employee) => {
      // old employee details will come
      // TODO: get the recently updated employee details. fix it in line number 50
      console.log(employee);
      res.json(employee);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

// TODO: Do it for DELETE method
