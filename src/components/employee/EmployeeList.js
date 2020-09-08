import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider"
import { Employee } from "./Employee";
import "./Employees.css";

export const EmployeeList = (propertiesObj) => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext)
  const { animals } = useContext(AnimalContext)

  useEffect(() => {
    getEmployees();
  }, []);

  // useEffect(() => {}, [employees]);

  return (
    <div className="employees">
      <article className="employees">
        <h1>Employees</h1>
        <button onClick={() => propertiesObj.history.push("/employees/create")}>
          Add Employee
        </button>
        {
          employees.map((eo) => {
          const employeeAnimalObj = animals.find(a => a.id === eo.animalId) || {}
          return <Employee key={eo.id} employeeObj={eo} animalObj={employeeAnimalObj} />;
        })
        }
      </article>
    </div>
  );
};
