import React, { useCallback, useContext, useRef } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animals.css"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const animalLocation = useRef("")
    const animalName = useContext("")



    return (
        <>
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
                <select
                    defaultValue=""
                    name="location"
                    id="animalLocation"
                    ref={animalLocation}
                    required
                    autoFocus
                    className="form-control"
                ></select>
            </div>

        </form>
            <h1>GIMME ANIMALS</h1>
            </>
    )
}

