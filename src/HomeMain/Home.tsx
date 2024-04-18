// import { useContext } from "react"
// import { userContext } from "../App"
// import {auth} from '../config/firebase'
// import {signOut} from 'firebase/auth'
import { useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Stack } from "@mui/material"
import './home.scss'
import {AnimatePresence} from 'framer-motion'
import AnimateOutlet from "../AnimateOutlet/AnimateOutlet"

export function Home (){
  const location = useLocation()
    
    return (
        <div className="home">
          <Stack
          position={"relative"}
          >
          <Header/>
          <main className="main-outlet">
            <AnimatePresence> 
            <AnimateOutlet key={location.pathname}/>
            </AnimatePresence>
          </main>
          </Stack>
        </div>
    )
}