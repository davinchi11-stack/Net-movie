import { Outlet } from "react-router-dom"
import './style.scss'
import { Container } from "@mui/material"
import { styled } from "@mui/system"


const StyledContainer = styled(Container)({
  position: "relative",
   zIndex : 9999,
   padding :"10px",
   overflow : "hidden",
   minHeight : "100svh",
})

export function RegisterMain () {
    return (
        <div className="reg-main">                  
            <div className="reg"> 
            <StyledContainer>
            <main className="register-main">
            <Outlet/>
            </main>
            </StyledContainer>
            </div>
        </div>
    )
}

//  RegisterMain contains the Main rouute in this case we did not pass in a router link we just pass in 
//  the router pages which are in the <Outlet/>
