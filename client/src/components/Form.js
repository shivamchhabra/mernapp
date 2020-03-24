import React from "react";
import Input from "./Input";

const Form = props => {
  return (
    <form onSubmit={props.handler}>
      <h4>{props.isEditForm ? "Editing Employee: " : "Add Employee: "}</h4>
      <div className="form-group">
        <Input
          name="firstName"
          placeholder="Enter First Name"
          labelName="First Name: "
          handleChange={props.handleChange}
          value={props.employee.firstName}
        />
        <Input
          name="lastName"
          placeholder="Enter lastName"
          labelName="last Name: "
          handleChange={props.handleChange}
          value={props.employee.lastName}
        />
        <Input
          name="job "
          placeholder="Enter job"
          labelName="JOB: "
          handleChange={props.handleChange}
          value={props.employee.job}
        />
        <Input
          name="Salary"
          placeholder="Enter Salary"
          labelName="Salary: "
          handleChange={props.handleChange}
          value={props.employee.salary}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
