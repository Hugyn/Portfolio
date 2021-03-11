import React, {useRef, useEffect, useState} from 'react'
import './home-styles.css'
import hoverEffect from 'hover-effect'
import {TweenMax, Power3 } from "gsap";


function Home() {
    const [index, setIndex] = useState(0)
    const [leterIndex, setLeterIndex] = useState(0)
    const [word, setWord] = useState("")
    const [isRunning, setIsRunning] = useState(true);
   let app = useRef(null)

   const alphabet = ["a","b","c","d","D","e","F","f","g","h","i","j","k","l","H","m","n","o","I","p","q","r","a","s","L","t","G","u","v","S","w","W","x","y","z","."," "];


    const fullStack = "Welcome to my portfolio"
    useEffect(() => {
        TweenMax.to(app, 5 , {opacity: 1, y: -20, ease: Power3.easeOut})    

        const id = window.setInterval(()=>{
            if(isRunning){
             setIndex(()=> index + 1)
             if(alphabet[index] === fullStack[leterIndex]){
                 setWord(word.concat(fullStack[leterIndex]))
                 setIndex(0);
                 setLeterIndex(()=> leterIndex + 1)
             }if(word.length === fullStack.length){
                 setIndex(35)
                 setIsRunning(false)
              }
            }
         },5)
         return ()=> window.clearInterval(id)

    },[index, leterIndex, word]);
    return (
        <div className='homeContainer'>
            <h1 className='welcome'>{word + alphabet[index]}</h1>
            <img className='homeImage' ref={el => app = el} src='LogoHN.png'></img>
       </div>
    )
}

export default Home
