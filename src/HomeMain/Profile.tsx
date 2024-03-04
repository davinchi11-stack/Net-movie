import { Button, Container, Stack , Typography } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../App";
import {auth} from '../config/firebase'
import { signOut } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth'
import './home.scss'
import { useNavigate } from "react-router-dom";



export function Profile () {

 const {setUserLogged}: any = useContext(userContext)
 const [user] = useAuthState(auth)
 const navigate = useNavigate()
  const handleLogout = async () => {
    await signOut(auth).then(()=> {
      setUserLogged(false)
      navigate("/")
    })
 }
    return(
        <div className="profile">
            <Container>
               <Stack
                 paddingTop={20}
               //   justifyContent={"center"}
                 alignItems={"center"}
                 spacing={2.4}
               >
                <div className="photo">
                   <img src={user?.photoURL || ""} alt="" />
                </div>
                <div className="infomation">
                   <Typography sx={{'@media(max-width: 800px)': {fontSize: '18px'}, textTransform: "capitalize"}} textAlign={"center"}  variant="h4" color="white">{user?.displayName}</Typography>
                   <Typography sx={{textTransform: "capitalize" ,'@media(max-width: 800px)': {fontSize: '19px'} }}  variant="h4"  color="white">{user?.email}</Typography>
                </div>
                <Button sx={{width: 200}} onClick={handleLogout} variant="contained">Log out</Button>
               </Stack>
            </Container>
        </div>
    )
}