import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearch = () => {
    const { setTerms } = useContext(AnimalContext)

    return (
        <>
            <div>Search for animal
            </div>
            <input type="text" placeholder="enter search"
                onChange={
                    (e) => {
                    setTerms(e.target.value)
                }
            }
            />
            </>
    )
}