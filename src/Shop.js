import React, {useState, useEffect} from 'react'
import './App.css';
import { Translate } from "react-localize-redux";

export default function Shop() {
const [person, setPerson] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item] = data.results;
    setPerson(item);
    console.log(item)
    setLoading(false)
}, []);

    return (
        <div>
             <h1>
                <Translate id="shop.title" />
            </h1>
            <h6>
                <Translate id="about.text" />
            </h6>
    {loading ? <div>loading...</div> : <img src={person.picture.large}/>} 
        </div>
    )
}
