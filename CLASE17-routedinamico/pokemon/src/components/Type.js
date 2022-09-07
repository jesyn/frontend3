import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './pokedex.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Type = () => {
    const url = `https://pokeapi.co/api/v2/type/`
    const [pokeType, setPokeType] = useState([])
    console.log("url tipos"+ url)

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setPokeType(res.data.results)
        })
    }, [url])

    return (
        <div>
            <ul className="select-poke">
                {pokeType.map(tipo => 
                <Link key={tipo.name} to={`${tipo.name}`}>
                    <li>{tipo.name}</li>
                </Link>
                )}
            </ul>
            <Outlet/>
        </div>
    )
}

export default Type;