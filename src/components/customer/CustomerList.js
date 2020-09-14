import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customers.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    
    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(() => {
    }, [customers])

    return (
        <article className="customers">
            {
                customers.map(co => { return <section key={co.id} className="customer"><div><h3>{co.name}</h3></div><div>{co.address}</div></section>})
            }
        </article>
    )
}