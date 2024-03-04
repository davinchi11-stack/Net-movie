// import { useContext } from "react"
// import { userContext } from "../App"
// import {auth} from '../config/firebase'
// import {signOut} from 'firebase/auth'
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Stack } from "@mui/material"
import './home.scss'
export function Home (){
    
    return (
        <div className="home">
          <Stack
          position={"relative"}
          >
          <Header/>
          <main className="main-outlet">
            <Outlet/>
          </main>
          </Stack>
        </div>
    )
}