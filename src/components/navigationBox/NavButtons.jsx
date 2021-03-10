import React,{ useState, useEffect, useRef } from 'react'
import "./NavButtons-style.css"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"






const NavButtons = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [index, setIndex] = useState(0);
    const [letterIndex, setLeterIndex] = useState(0)
    const [word, setWord] = useState('')
    const [link, setLink] = useState('')
    const alphabet = ["a","A","b","c","C","d","e","f","g","h",'H',"i","j","k","l","m","M","n","o","p","q","r","a","s","t","u","v","w","W","x","y","z", " "];

    useEffect(()=>{
        var id = window.setInterval(() => {
            if(isRunning && word !== link){
                setIndex((prevIndex) => prevIndex + 1)

                if(alphabet[index] === word[letterIndex]){
                    setLink((prevLink)=>prevLink.concat(word[letterIndex]) )
                    setIndex(0)
                    setLeterIndex((prevLeterIndex)=> prevLeterIndex + 1)
                }
            }   
        }, 10);
        return ()=> clearInterval(id);
    },[index, letterIndex, link, isRunning])

    if(word == link){
        var l = link
    }else{
        var l = link + alphabet[index]
    }
    
    
   


   
   
    return (
        <nav>
            <ul className="nav-links">
            {/* onClick={(e)=>e.target.parentElement.className = "active"} */}
                <NavLink exact to='/' style={{}} onMouseOver={()=> {setIsRunning(true); setWord("Home")}}
                        onMouseLeave={()=> {setIsRunning(false);setLink('');setIndex(0);setLeterIndex(0)}}>
                        <li style={{left:"20%"}}>{isRunning && word === "Home" ? l : "Home"}</li>
                </NavLink>
                <NavLink to="/about"  style={{}} onMouseOver={()=> {setIsRunning(true); setWord("About")}}
                        onMouseLeave={()=> {setIsRunning(false);setLink('');setIndex(0);setLeterIndex(0)}}>
                        <li style={{left:"20%"}}>{isRunning && word === "About"  ? l : "About"}</li>
                </NavLink>
                <NavLink to="/my-work" style={{}} onMouseOver={()=> {setIsRunning(true); setWord("My Work")}}
                        onMouseLeave={()=> {setIsRunning(false);setLink('');setIndex(0);setLeterIndex(0)}}>
                        <li style={{left:"6%"}}>{isRunning && word === "My Work"  ? l : "My Work"}</li>
                </NavLink>
                <NavLink to="/contact" style={{}} onMouseOver={()=> {setIsRunning(true); setWord("Contact")}}
                        onMouseLeave={()=> {setIsRunning(false);setLink('');setIndex(0);setLeterIndex(0)}}>
                        <li style={{left:"10%"}}>{isRunning && word === "Contact"  ? l : "Contact"}</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavButtons;