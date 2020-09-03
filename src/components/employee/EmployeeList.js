import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employees.css"

export const EmployeeList = () => {
 
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    useEffect(() => {
    }, [employees])

    return (
        <article className="employees">
            {
                employees.map(eo => {
                    return <section key={eo.id} className="employee">
                        <div><h3>{eo.name}</h3></div>
                        <div>{eo.locationId}</div>
                </section>})
            }
        </article>
    )
}