import React, { useContext, useRef, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { EmployeeContext } from "../employee/EmployeeProvider";
import "./Animals.css";

export const AnimalForm = (props) => {
  const { addAnimal } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const { employees, getEmployees } = useContext(EmployeeContext);
  const animalLocation = useRef("");
  const animalName = useRef("");
  const animalBreed = useRef("");
  const animalEmployee = useRef("");
  //
  const addNewAnimal = () => {
    const locationId = parseInt(animalLocation.current.value);
    const employeeId = parseInt(animalEmployee.current.value);
    if (locationId === 0 || employeeId === 0) {
      window.alert("Please choose values for location & caretaker");
    } else {
      addAnimal({
        name: animalName.current.value,
        breed: animalBreed.current.value,
        locationId,
        employeeId,
        customerId: parseInt(localStorage.getItem("kennel_customer")),
      }).then(() => {
        props.history.push("/animals");
      });
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <h1>GIMME ANIMALS</h1>
      <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <div className="form-group">
          <label htmlFor="animalName">Animal Name</label>
          <input
            type="text"
            id="animalName"
            ref={animalName}
            required
            autoFocus
            className="form-control"
            placeholder="Enter new animal name"
          />
          <label htmlFor="animalBreed">Animal Breed (rude)</label>
          <input
            type="text"
            id="animalBreed"
            ref={animalBreed}
            required
            autoFocus
            className="form-control"
            placeholder="Enter new animal breed IF YOU WANT"
          />
          <select
            defaultValue=""
            name="location"
            id="animalLocation"
            ref={animalLocation}
            required
            autoFocus
            className="form-control"
          >
            <option value="0">Select a location for da animal</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
          <select
            defaultValue=""
            name="employee"
            id="animalEmployee"
            ref={animalEmployee}
            required
            autoFocus
            className="form-control"
          >
            <option value="0">Select a caretaker</option>
            {employees.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            addNewAnimal();
          }}
        >
          Save New Animal
        </button>
      </form>
    </>
  );
};
