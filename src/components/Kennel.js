import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import "./Kennel"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerContext, CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList/>
        </LocationProvider>

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList/>
        </AnimalProvider>

        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList/>
        </EmployeeProvider>

        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList/>
        </CustomerProvider>
    </>
)