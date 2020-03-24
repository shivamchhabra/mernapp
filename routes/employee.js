const express = require("express");
const employeeRouter = express.Router();
const Employee = require("../model/Employee");

//Read
employeeRouter.get("/", (req, res) => {
  Employee.find({}, (err, res) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to get employees",
          msgError: true
        }
      });
    else res.status(200).json(res);
  });
});

//create
employeeRouter.post("/", (req, res) => {
  const employee = new Employee(req.body);
  employee.save((err, document) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to add employee",
          msgError: true
        }
      });
    else
      res.status(200).json({
        message: {
          msgBody: "Successfully added Employee",
          msgError: false
        }
      });
  });
});

//delete
employeeRouter.delete("/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id, err => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to delete",
          msgError: true
        }
      });
    else
      res.status(200).json({
        message: {
          msgBody: "Successfully deleted element",
          msgError: false
        }
      });
  });
});

//update
employeeRouter.put(":id", (req, res) => {
  Employee.findOneAndUpdate(
    req.params.id,
    req.body,
    { runValidators: true },
    (err, res) => {
      if (err)
        res.status(500).json({
          message: {
            msgBody: "Unable to Update",
            msgError: true
          }
        });
      else
        res.status(200).json({
          message: {
            msgBody: "Updated Successfully",
            msgError: true
          }
        });
    }
  );
});

module.exports = employeeRouter;
