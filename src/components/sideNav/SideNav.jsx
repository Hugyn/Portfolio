import React, {useState, useEffect} from 'react'
import "./SideNav-style.css"
import { motion } from "framer-motion"

function SideNav() {
    const[index, setIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [leterIndex, setLeterIndex] = useState(0)
    const [word, setWord] = useState('')
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","H","m","n","o","I","p","q","r","s","L","t","G","u","v","w","x","y","z","."];
    const [socialMedia, setSocialMedia] = useState('')

    useEffect(()=> {

        const id = window.setInterval(()=>{  
            if(isRunning && index !== 30){
                setIndex(()=> index + 1)
                if(alphabet[index] === socialMedia[leterIndex]){
                    const leter = socialMedia[leterIndex]
                    setWord(word.concat(leter))
                   console.log(word)
                   setIndex(0)
              setLeterIndex(()=> leterIndex + 1)
                }if(word.length === socialMedia.length - 1){
                   setIndex(30)
                   setIsRunning(false)
                }
        }
        },10)
        return  ()=> window.clearInterval(id)
        
    },[index, isRunning, leterIndex])

    return (
    <div className="blackNav">
        <motion.div className="socialMediaContainer"
        initial ={{y: -800, opacity: 0}}
        animate={{y: -100, opacity: 1}}
        transition={{duration: 3}}
        >
            <motion.li className=" socialMedia fab fa-instagram"
                whileHover={{width: '10vw'}}
                onMouseOver={()=> {
                    setIsRunning(true)
                   setSocialMedia('Instagram.')
                }}
                onMouseLeave={()=> {
                    setIsRunning(false)
                    setIndex(0)
                    setLeterIndex(0)
                    setWord('')
                }}><span>{word + alphabet[index]}</span></motion.li>

            <motion.li className="socialMedia fab fa-github"
                whileHover={{width: '10vw'}}
                onMouseOver={()=> {
                    setIsRunning(true)
                    setSocialMedia('Github.')
                }}
                onMouseLeave={()=> {
                    setIsRunning(false)
                    setIndex(0)
                    setLeterIndex(0)
                    setWord('')
                }}><span>{word + alphabet[index]}</span></motion.li>

            <motion.li className="socialMedia fab fa-linkedin-in"
                whileHover={{width: '10vw'}}
                onMouseOver={()=> {
                    setIsRunning(true)
                    setSocialMedia('Linkedin.')
                }}
                onMouseLeave={()=> {
                    setIsRunning(false)
                    setIndex(0)
                    setLeterIndex(0)
                    setWord('')
                }}><span>{word + alphabet[index]}</span></motion.li>
        </motion.div>
    </div>
    )
}

export default SideNav
