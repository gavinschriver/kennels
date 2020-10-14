import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"

export const Animal = ({ animal }) => {
    const { releaseAnimal } = useContext(AnimalContext)
    
    return (<section className="animal">

        <h3 className="animal__name">
            <Link to={`/animals/${animal.id}`}>
                {animal.name}
            </Link>
        </h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__treatments">{animal.treatment}</div>
        <button onClick={e => {
            e.preventDefault()
            releaseAnimal(animal.id)
        }}
        >BUHBYEE</button>
    </section>)
}