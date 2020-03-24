export default {
  getEmployee: () => {
    return fetch("/employee")
      .then(res => res.json()) //parsing our response
      .then(data => data); //sending our data
  },
  deleteEmployee: _id => {
    return fetch(`/employee/${_id}`, { method: "delete" })
      .then(res => res.json())
      .then(data => data);
  },
  updateEmployee: employee => {
    return fetch(`/employee/${employee._id}`, {
      method: "put",
      body: JSON.stringify(employee),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => data);
  },
  createEmployee: employee => {
    return fetch(`/employee`, {
      method: "post",
      body: JSON.stringify(employee),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => data);
  }
};
