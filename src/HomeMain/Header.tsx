import { motion , useAnimation} from 'framer-motion'
import './home.scss'
import {auth} from '../config/firebase'
import  {useAuthState} from 'react-firebase-hooks/auth'
import { Link } from "react-router-dom";
import { HeaderMobile } from "./Mobile-home/headerMobile";
import logo from '../assets/new.png'
import { useEffect } from 'react';
import { useHeaderAnimation } from '../Hook/useHeaderAnimation';



export function Header() {
  const {headVar , logoVar , profileVar , listOne , listTwo , drawer} = useHeaderAnimation()
    
     const [user] = useAuthState(auth)

     const control = useAnimation()

     useEffect(() => {
        setTimeout(() => {
           control.start("to")
        }, 3800);
     }, [control]);
    
        return (
        <motion.div
         variants={headVar}
         initial="from"
         animate={control}
         whileHover="hover"
         className="drawer-class" > 
        <motion.div variants={drawer} className="drawer">
        <div
         className="head"
        >
          <div  className="logo">
            <Link to='/'><motion.img variants={logoVar} src={logo} alt="" /> </Link>
          </div>

           <nav className="nav">
             <ul>
              <li 
              >
                <Link to='/profile' >
                <motion.img variants={profileVar} className="image-profile" src={ user?.photoURL ? user?.photoURL : ''} alt='profile' />
                </Link>
              </li>
              <motion.li
              variants={listOne}
              whileHover={{
                scale : [1, 1.01 , 1.02 , 1.03 ,1.04 , 1 , 1.05 ,1] ,

              }}
              >
                <Link to='/movies'>Movies</Link>
              </motion.li>
              <motion.li
               variants={listTwo}
                 whileHover={{
                  scale : [1, 1.01 , 1.02 , 1.03 ,1.04 , 1 , 1.05 , 1] ,
                }}
              >
                <Link to='/tvseries'>Tv Series</Link>
              </motion.li>
             </ul>
           </nav>
        </div>
        </motion.div>
        <div className="mobile">
        <HeaderMobile user={user}/>
        </div>
        </motion.div>
    )
}