import React, {useEffect, useState} from 'react'
import "./Name-style.css"
import Tilt from 'react-tilt'
import { motion } from "framer-motion"




function Name() {

    const [index, setIndex] = useState(0)
    const [leterIndex, setLeterIndex] = useState(0)
    const [word, setWord] = useState("")
    const [isRunning, setIsRunning] = useState(true);

    const alphabet = ["a","b","c","d","D","e","F","f","g","h","i","j","k","l","H","m","n","o","I","p","q","r","a","s","L","t","G","u","v","S","w","x","y","z","."," "];


    const fullStack = "Full Stack De"
   

    useEffect(()=>{
       const id = window.setInterval(()=>{
           if(isRunning){
            setIndex(()=> index + 1)
            if(alphabet[index] === fullStack[leterIndex]){
                setWord(word.concat(fullStack[leterIndex]))
                setIndex(0);
                setLeterIndex(()=> leterIndex + 1)
            }if(word.length === fullStack.length){
                setIndex(28)
                setIsRunning(false)
             }
           }
            
            
            
        },5)
        return ()=> window.clearInterval(id)
    },[index, leterIndex, word])


    return (
        
        <div className="container">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}} 
                        transition={{duration: 5}}   
            >
            <Tilt className="name" options={{max:50}}>Hugo Nathan</Tilt></motion.div>
            <motion.h1 className="dev"
                       initial={{opacity: 0}}
                       animate={{opacity: 1}}
                       transition={{duration: 3}}
            >
            {word + alphabet[index]}</motion.h1>
        </div>
        
    )
}

export default Name
