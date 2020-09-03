import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animals.css"

export const AnimalList = () => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
            {
                animals.map(ao => <Animal key={ao.id} animal={ao} />)
            }
        </div>
    )
}