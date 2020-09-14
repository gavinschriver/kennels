import React, { useContext, useRef } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider";

import "./Employees.css";

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const { animals } = useContext(AnimalContext);
  const employeeName = useRef("");
  const employeeLocation = useRef(0);
  const employeeAnimal = useRef(0);
  const constructNewEmployee = () => {
    const locationId = parseInt(employeeLocation.current.value);
    const animalId = parseInt(employeeAnimal.current.value);

    if (locationId === 0) {
      window.alert("Please choose a location");
    } else {
      addEmployee({
        name: employeeName.current.value,
        locationId,
        animalId,
      }).then(() => {
        props.history.push("/employees");
      });
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <div className="form-group">
        <label htmlFor="employeeName">Employee Name</label>
        <input
          type="text"
          id="employeeName"
          ref={employeeName}
          required
          autoFocus
          className="form-control"
          placeholder="Enter new employee name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Assign new employee to a loction...</label>
        <select
          defaultValue=""
          name="location"
          id="employeeLocation"
          ref={employeeLocation}
          className="form-control"
        >
          <option value="0">Select a location</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>
              {l.name}
            </option>
          ))}
        </select>

        <select
          defaultValue=""
          name="animal"
          id="employeeAnimal"
          ref={employeeAnimal}
          className="form-control"
        >
          <option value="0">Assign an animal</option>
          {animals.map((a) => {
            return (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            );
          })}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          constructNewEmployee();
        }}
      >
        Save New Employee
      </button>
    </form>
  );
};
