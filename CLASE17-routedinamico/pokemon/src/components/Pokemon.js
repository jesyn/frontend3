import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'

const Pokemon = () => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    console.log(url)

    const [poke, setPoke] = useState({name:"",sprites:{front_default:""}})

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setPoke(res.data)
        })
    }, [url])

    return (
        <div className="select-poke">
            <h2>{params.pokeName}</h2>
            <h3>{poke.name}</h3>
            <img className="pokemonImg" src={poke.sprites.front_default} alt={poke.name}/>
        </div>
    )
}

export default Pokemon