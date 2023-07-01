import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'




function Ourapp() {
  const [pets, setPets] = useState([])

  // only run once the first time this component is rendered

  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")))
    }
  }, [])

  // run every time our pet state changes

  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets))
  }, [pets])
  return (
    <div>
      <OurHeader />
      {/* <Interval/> */}
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <h1>This is the first JSX app</h1>
      <ul>
        {pets.map(pet => <Pett setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} />
        )}
      </ul>
    </div>
  )
}

function AddPetForm(props) {

  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();


  const handleSubmit = (e) => {
    e.preventDefault()
    props.setPets(prev => prev.concat({ name, species, age }))
    setName("")
    setSpecies("")
    setAge("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="species" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

const OurHeader = () => {
  return <h1>This is our header</h1>

}
const TimeArea = () => {
  const [state, setState] = useState(new Date().toLocaleString())

  setTimeout(function () {
    setState(new Date().toLocaleString())
  }, 1000)
  return <p>This is the paragraph and it shows time, the current local time is {state} </p>
}
const Pett = (props) => {
  const handleDelete = () => {
    props.setPets(prev => prev.filter(pet => pet.id != props.id))
  }
  return <li>{props.name} is {props.species} and it is {props.age} years old with id of {props.id}
    <button onClick={handleDelete}>Delete</button>
  </li>
}

const LikeArea = () => {

  const [likeCount, setLikeCount] = useState(0)
  const increaseLike = () => {
    setLikeCount((prev) => {
      return prev + 1
    })
  }
  const decreaseLike = () => {
    setLikeCount((prev) => {
      if (prev > 0) {
        return prev - 1
      }
      return 0
    })
  }

  return (
    <>
      <button onClick={increaseLike}>Clicke to increase</button>
      <button onClick={decreaseLike}>Click to decrease</button>
      <h2>This page has been liked {likeCount} times</h2>

    </>
  )
}



export default Ourapp

