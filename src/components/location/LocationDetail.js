import React, { useState } from "react";
import "./Locations.css";
import Iframe from "react-iframe";

export const LocationDetail = (props) => {
  return (
    <section className="location">
      <h2 className="location__name">
        {props.location.state.chosenLocation.name}
      </h2>
      <address className="location__address">
        {props.location.state.chosenLocation.address}
      </address>
      <div>
        <h4>Employees</h4>
        {props.location.state.chosenLocation.employees
          .map((e) => e.name)
          .join(", ")}
      </div>

      <Iframe
        url="https://www.youtube.com/embed/b6EK2KRvuJY"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />

      <div>
        <h4>Current Residents</h4>
        {props.location.state.chosenLocation.animals
          .map((a) => a.name)
          .join(", ")}
      </div>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Back to Locatons
      </button>
    </section>
  );
};
