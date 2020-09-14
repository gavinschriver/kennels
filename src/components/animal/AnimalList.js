import React, { useContext, useEffect, useState } from "react";
import { AnimalContext, searchTerms } from "./AnimalProvider";
import { Animal } from "./Animal";
import "./Animals.css";

export const AnimalList = (props) => {
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext);

  const [ filteredAnimals, setFiltered ] = useState([])


  //init load of needed colleciton into com
  useEffect(() => {
    getAnimals();
  }, []);

  //set first rendering collection to full API colleciton
  useEffect(() => {
    setFiltered(animals)
  }, [animals]) 
  
  useEffect(() => {
    setFiltered(animals.filter(a => {
      return a.name.toLowerCase().includes(searchTerms.toLowerCase())
    }))
  }, [searchTerms])


  return (
    <>
      <button onClick={() => props.history.push("/animals/create")}>
        Make Appointment
      </button>
      
    <div className="animals">
      {filteredAnimals.map((ao) => {
        return (
          <Animal key={ao.id} animal={ao} />
        );
      })}
      </div>
      </>
  );
};
