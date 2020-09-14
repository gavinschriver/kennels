import React, { useContext, useState, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";

export const AnimalForm = (props) => {
  // Use the required context providers for data
  const { locations, getLocations } = useContext(LocationContext);
  const { addAnimal, animals, updateAnimal, getAnimals } = useContext(
    AnimalContext
  );

  // Component state
  const [animal, setAnimal] = useState({});

  // Is there an edit animal URL parameter??
  const [editMode, setEditMode] = useState(
    props.match.params.hasOwnProperty("animalId")
  );

  const handleControlledInputChange = (event) => {
    if (event.target.value.includes("fuck")) {
      alert("NOT ALLWOWED");
    } else {
      const newAnimal = Object.assign({}, animal);
      newAnimal[event.target.name] = event.target.value;
      setAnimal(newAnimal);
    }
  };

  /*{c}
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
  /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */
  const getAnimalInEditMode = () => {
    if (editMode) {
      const animalId = parseInt(props.match.params.animalId);
      const selectedAnimal = animals.find((a) => a.id === animalId) || {};
      setAnimal(selectedAnimal);
    }
  };

  // Get animals from API when component initializes
  useEffect(() => {
    getAnimals();
    getLocations();
  }, []);

  // Once provider state is updated, determine the animal (if edit)
  // RMEMEBER the use effect hook that bring in [animals] above will only run
  //ONCE, even if the component gets re-rendered (effect hook knows, even if a comp gets re-invoked, that a change hasnt happened to the thing in the ob array...); SO, unless by some witchcraft
  //your [animals] re-freshed in API from this page view, the hook below,
  //which is listening for something to change in order to see if we're in
  //edit mode, will only happen ONCE if [animals] changing is its only
  //condition; so, if we need to re-run that edit function, we need a way to a) listen for a change to a var we can list in our
  //observable array having happened that would then run our editchecker as the effect itself, THEN have that same condition be bound up w/ a way to
  //refer to the precise resource we need to lookup and parse out to fill in our fields
  useEffect(() => {
    getAnimalInEditMode();
  }, [animals, props.match.params.animalId]);

  const constructNewAnimal = () => {
    const locationId = parseInt(animal.locationId);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      if (editMode) {
        updateAnimal({
          id: animal.id,
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.treatment,
          customerId: parseInt(localStorage.getItem("kennel_customer")),
        }).then(() => props.history.push("/animals"));
      } else {
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.treatment,
          customerId: parseInt(localStorage.getItem("kennel_customer")),
        });
        // .then(() => props.history.push("/animals"));
      }
    }
  };

  return (
    <>
      <form className="animalForm">
        <h2 className="animalForm__title">
          {editMode ? "Update Animal" : "Admit Animal"}
        </h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Animal name: </label>
            <input
              type="text"
              name="name"
              value={animal.name} // if this is left off, validation attempt won't matter...
              required
              autoFocus
              className="form-control"
              proptype="varchar"
              placeholder="Animal name"
              defaultValue={animal.name}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="breed">Animal breed: </label>
            <input
              type="text"
              name="breed"
              required
              className="form-control"
              proptype="varchar"
              placeholder="Animal breed"
              defaultValue={animal.breed}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="locationId">Location: </label>
            <select
              name="locationId"
              className="form-control"
              proptype="int"
              value={animal.locationId}
              onChange={handleControlledInputChange}
            >
              <option value="0">Select a location</option>
              {locations.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="treatment">Treatments: </label>
            <textarea
              type="text"
              name="treatment"
              className="form-control"
              proptype="varchar"
              value={animal.treatment}
              onChange={handleControlledInputChange}
            ></textarea>
          </div>
        </fieldset>
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            constructNewAnimal();
          }}
          className="btn btn-primary"
        >
          {editMode ? "Save Updates" : "Make Reservation"}
        </button>
      </form>
      {animals.map((a) => {
        return (
          <button
            onClick={() => {
              props.history.push(`/animals/edit/${a.id}`);
              alert(a.name);
            }}
          >
            Edit {a.name}
          </button>
        );
      })}
    </>
  );
};
