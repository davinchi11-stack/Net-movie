import {Stack } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import './home.scss'
import Tooltip from '@mui/material/Tooltip';
import {auth} from '../config/firebase'
import  {useAuthState} from 'react-firebase-hooks/auth'
import gsap  from 'gsap'
import {useGSAP } from '@gsap/react'
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HeaderMobile } from "./Mobile-home/headerMobile";
import logo from '../assets/new.png'

export function Header() {
    const container = useRef(null);
    var tl = gsap.timeline();
        useGSAP(() => {
           tl.fromTo(".logo-mobile", {x: -100}, {duration: 1, ease: 'Expo.easeInOut',  x: 0 , delay: 1 } ) 
           tl.fromTo(".image-profile-mob", {x: 100} , {x: 0 , duration: 1, ease: 'Expo.easeInOut', delay: 1.2 })
           tl.fromTo(".list" , {opacity : "0"}, {opacity: "1", duration: 1, ease: 'Expo.easeInOut'}, "+=1")
           tl.fromTo(".nav", {x: -300}, {duration: 1.5, ease: 'Expo.easeInOut',  x: 0 , delay: 4.6 })
        }, { scope: container });

     const [user] = useAuthState(auth)
    
        return (
        <div className="drawer-class" > 
        <div className="drawer">
        <div
         className="head"
        >
          <div className="logo">
            <Link to='/'><img src={logo} alt="" /> </Link>
          </div>

           <nav className="nav">
             <ul>
              <li>
                <Link to='/profile' >
                <img className="image-profile" src={ user?.photoURL ? user?.photoURL : ''} alt='profile' />
                </Link>
              </li>
              <li>
                <Link to='/movies'>Movies</Link>
              </li>
              <li>
                <Link to='/tvseries'>Tv Series</Link>
              </li>
             </ul>
           </nav>
        </div>
        </div>
        <div className="mobile">
        <HeaderMobile user={user}/>
        </div>
        </div>
    )
}