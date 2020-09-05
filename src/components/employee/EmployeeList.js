import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employees.css";

export const EmployeeList = (propertiesObj) => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {}, [employees]);

  return (
    <div className="employees">
      <article className="employees">
        <h1>Employees</h1>
        <button onClick={() => propertiesObj.history.push("/employees/create")}>
          Add Employee
        </button>
        {employees.map((eo) => (
          <Employee key={eo.id} employeeObj={eo} />
        ))}
      </article>
    </div>
  );
};
