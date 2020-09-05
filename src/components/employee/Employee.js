import React from "react"
import "./Employees.css"

export const Employee = ({ employeeObj }) => (
    <section className="employee">
        <div className="employee__name">Employee name: {employeeObj.name}</div>
        <div className="employee__location">Employee location: {employeeObj.locationId}</div>
    </section>
)