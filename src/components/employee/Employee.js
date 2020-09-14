import React, { useRef } from "react"
import "./Employees.css"

export const Employee = ({ employeeObj, animalObj }) => (

    <section className="employee">
        <div className="employee__name">Employee name: {employeeObj.name}</div>
        <div className="employee__location">Employee location: {employeeObj.locationId}</div>
        <div className="employee__animal">Assigned to: {animalObj.name}</div>
        <button className="delete_employee">YA FIRED</button>
    </section>
)