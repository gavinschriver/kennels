import React, { useContext, useRef } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Employees.css";

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const employeeName = useRef("");
  const employeeLocation = useRef(0);
    const constructNewEmployee = () => {
        const locationId = parseInt(employeeLocation.current.value)
        
        if (locationId === 0) {
            window.alert("Please choose a location")
        } else {
            addEmployee({
                name: employeeName.current.value,
                locationId: locationId
            }).then(() => {props.history.push("/employees")})
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
      </div>
          <button type="submit" className="btn btn-primary" onClick={e => {
              e.preventDefault()
              constructNewEmployee()
      }}>
        Save New Employee
      </button>
    </form>
  );
};
