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
        <div className="drawer-class" ref={container} > 
        <div className="drawer">
        <Stack
        alignItems={'center'}
         justifyContent={'center'}
        >
          <nav className="nav-container">
            <Stack className="nav" sx={{'@media(max-width: 900px)': {display: "none"} }}>
            <List>
            <ListItemButton component={Link} to='/profile'>
              <Tooltip title="Profile"  placement="right">
              <IconButton>
                   <img className="image-profile" src={ user?.photoURL ? user?.photoURL : ''} alt='profile' />
                 </IconButton>
              </Tooltip>
              </ListItemButton>
                <ListItemButton component={Link} to='/' 
                sx={{
                  display: "flex",
                  justifyContent :"center",
                  alignItems: "center",
                }}
                >
                <Tooltip title="home"  placement="right"> 
                 <IconButton>
                   <HomeOutlinedIcon sx={{ fontSize: 24 , color :"#fff" }}/>
                 </IconButton>
                 </Tooltip>
                </ListItemButton>
                <ListItemButton component={Link} to='/movies'
                    sx={{
                      display: "flex",
                      justifyContent :"center",
                      alignItems: "center",
                    }}
                >
                  <Tooltip title="movies"  placement="right">
                  <IconButton>
                   <TvOutlinedIcon  sx={{ fontSize: 22 , color : "#fff"  }} />
                 </IconButton>
                  </Tooltip>
                </ListItemButton>
                <ListItemButton component={Link} to='tvseries'
                    sx={{
                      display: "flex",
                      justifyContent :"center",
                      alignItems: "center",
                    }}
                >
                 <Tooltip title="tv series"  placement="right">
                 <IconButton>
                   <MovieCreationOutlinedIcon sx={{ fontSize: 22 , color : "#fff"  }}/>
                 </IconButton>
                 </Tooltip>
                </ListItemButton>
               </List>
            </Stack>
          </nav>
        </Stack>
        </div>
        <div className="mobile">
        <HeaderMobile user={user}/>
        </div>
        </div>
    )
}