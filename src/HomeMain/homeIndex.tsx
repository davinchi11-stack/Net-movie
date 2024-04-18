import { Stack } from '@mui/system'
import netVideo from '../assets/Netflix New Logo Animation 2019.mp4'
import logo from '../assets/Vector__3_.svg'
import './home.scss'
import { Typography } from '@mui/material'
import {styled} from '@mui/system'
import { useStyled } from '../Hook/UseRegisterStyled'
import { motion , easeInOut , useAnimation, easeIn} from 'framer-motion'
import { useEffect } from 'react'
// import gsap  from 'gsap'
// import {useGSAP } from '@gsap/react'
// import { useRef } from "react";


const StyleContent = styled(Stack)({
     position : "absolute",
     zIndex : '999',
     height: '80svh',
     width: '100%' ,
})

const mainVar = {
  from : {x : "100vw"} ,
  to : {x : 0, 
    transition : {
      type : "spring",
      when : "beforeChildren",
      staggerChildren : 0.2,
      mass : 0.5,
      damping : 10
    }
  },
  exit : {x : "-100vw",
  transition : {
    ease : easeInOut
  }


  }
}

const headVar = {
  from : {} ,
  to : {
    transition : {
      type : "spring",
      when : "beforeChildren",
      staggerChildren : 0.8,
    }
  },
 
}

const img = {
  from : {y : 200} ,
  to : {
    y : 0,
    transition : {
      type : "tween",
      ease : easeIn
    }
  },
 
}

const textOne = {
  from : {y : 200} ,
  to : {
    y : 0,
    transition : {
      type : "tween",
      ease : easeIn
    }
  },
 
}

const textTwo = {
  from : {y : 200} ,
  to : {
    y : 0,
    transition : {
      type : "spring",
      stiffness : 300,
      mass : 0.5,
      damping : 6
    }
  },
 
}


export  function HomeIndex () {

  const control = useAnimation()

  useEffect(() => {
     setTimeout(() => {
        control.start("to")
     }, 4000);
  }, [control]);
    
    const {TypoMain} = useStyled()
    return (
     
        <motion.div 
        variants={mainVar}
        initial="from"
        animate="to"
        exit='exit'
         className="home-index" >
           <div className="video-main">
           <video  height={500} autoPlay muted className='video'>
            <source  src={netVideo} type="video/mp4" />
            <source src={netVideo} type="video/webm" />
            <source src={netVideo} type="video/ogg" />
            Your browser does not support the video tag.
            </video>
           </div>
            <motion.div
             className='homelet'
             variants={headVar}
             initial="from"
             animate={control}
            >
                <StyleContent
            justifyContent={'center'}
            alignItems={'center'}
            // spacing={1}
            >
              <div style={{overflow : "hidden"}} ><motion.img variants={img} className="logo" src={logo} alt='logo' /></div> 
              <div style={{overflow : "hidden"}}><motion.h2  variants={textOne}className='text-one'>Everything you need is here</motion.h2></div> 
              <div style={{overflow : "hidden"}}> <motion.p variants={textTwo} className='text-two' >right where you belong</motion.p></div>
            </StyleContent>
            </motion.div>
        </motion.div>
    )
}