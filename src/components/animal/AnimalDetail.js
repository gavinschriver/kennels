import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"

export const AnimalDetail = (props) => {
    const { releaseAnimal, getAnimalById } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({})

    useEffect(() => {
        const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location}</div>
            <div className="animal__owner">Customer: {animal.customer}</div>
            <button onClick={
          () => {
                    const animalId = animal.id
                    releaseAnimal(animalId)
                        .then(() => {
                            props.history.push("/animals")
                        })
                }
            }>
                Release Animal
            </button>
            <button onClick={() => {
                props.history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}