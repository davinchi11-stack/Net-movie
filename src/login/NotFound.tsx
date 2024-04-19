import { Button, Container, Stack  } from "@mui/material";
import '../HomeMain/home.scss'
import { useNavigate } from "react-router-dom";
import {motion } from 'framer-motion'

const aniamtionVar = {
    from : {
        x : -100
    }, 
    to : {
        x: [100 , -100 , 100]
    }
}


export function Notfound () {

 const navigate = useNavigate()
  const handleLogout =  () => {
      navigate("/")
 }
    return(
        <motion.div 
        className="profile-lost">
            <Container>
               <Stack
                 paddingTop={20}
                 alignItems={"center"}
                 spacing={2.4}
               >
                <div className="typeText">
                   <h3>You're Lost !!</h3>
                     <motion.div 
                     variants={aniamtionVar}
                       initial="from"
                       animate="to"
                       transition={{
                          type : "tween",
                          repeat: Infinity,
                           duration : 2,
                           ease: [0.17, 0.67, 0.83, 0.67] 
            
                       }}
                     className="box"></motion.div>
                </div>
                <Button sx={{width: 200}} onClick={handleLogout} variant="contained">Go Back</Button>
               </Stack>
            </Container>
        </motion.div>
    )
}