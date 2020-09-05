import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export const AnimalList = () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className="animals">
            {
                animals.map(ao => {
                    const owner = customers.find(co => co.id === ao.customerId) || {}
                    const clinic = locations.find(lo => lo.id === ao.locationId) || {}

                    return <Animal key={ao.id} animal={ao} customer={owner} location={clinic}/>
                
                })
            }
        </div>
    )
}