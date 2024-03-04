import { Stack } from '@mui/system'
import netVideo from '../assets/Netflix New Logo Animation 2019.mp4'
import logo from '../assets/Vector__3_.svg'
import './home.scss'
import { Typography } from '@mui/material'
import {styled} from '@mui/system'
import { useStyled } from '../Hook/UseRegisterStyled'
import gsap  from 'gsap'
import {useGSAP } from '@gsap/react'
import { useRef } from "react";


const StyleContent = styled(Stack)({
     position : "absolute",
     zIndex : '999',
     height: '80svh',
     width: '100%' ,
})


export function HomeIndex () {
    const container = useRef(null)
    let tl = gsap.timeline()

    useGSAP(()=> {
        tl.fromTo(".logo", 
          {opacity: "0"},
          {opacity: "1", duration: 1.5 , delay: 5 , ease:"Expo.easeInOut"},
        
        )

        tl.fromTo(".text-one", 
        {opacity: "0"},
        {opacity: "1", duration: 1.5 , delay: 0.5 , ease:"Expo.easeInOut" } ,
      
        )

        tl.fromTo(".text-two", 
        {opacity: "0"},
        {opacity: "1", duration: 1.5 , delay: 0.5 , ease:"Expo.easeInOut"},
      
        )
    }, {scope : container})

    
    const {TypoMain} = useStyled()
    return (
        <div className="home-index" ref={container}>
           <div className="video-main">
           <video  height={500} autoPlay muted className='video'>
            <source  src={netVideo} type="video/mp4" />
            <source src={netVideo} type="video/webm" />
            <source src={netVideo} type="video/ogg" />
            Your browser does not support the video tag.
            </video>
           </div>
         <StyleContent
         justifyContent={'center'}
         alignItems={'center'}
         spacing={2}
         >
            <img className="logo" src={logo} alt='logo' />
         <TypoMain className='text-one' variant="h3" color="white">Everything you need is here</TypoMain>
         <Typography className='text-two' variant="body2" color="white" >right where you belong</Typography>
         </StyleContent>
        </div>
    )
}