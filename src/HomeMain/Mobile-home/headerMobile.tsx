import {Stack } from "@mui/material";
import  ListItem from '@mui/material/ListItem'
import logo from '../../assets/new.png'
import ListItemText from '@mui/material/ListItemText'
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import { Link } from "react-router-dom";

export function HeaderMobile (props: any) {
    const {user} = props
    return (  
    <>
        <Stack 
        padding={1}
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
        height={"20px"}
        paddingTop={4}
        bgcolor={"rgba(0,0,0,0.5)"}

            sx={{
              backdropFilter: 'blur(8px)',
              '@media(min-width: 900px)': {
                display: "none" 
              } 
           }}>
              <div className="log-mon">
              <IconButton component={Link} to='/'>
              <img className="logo-mobile" src={logo} alt='profile' />
                </IconButton>
              </div>
              <div className="nav-mobile">
                <List sx={{display: "flex"}} className="list">
                  <ListItem component={Link} to='/movies' >
                    <ListItemText sx={{color: "white"}}  primary="Movie"/>
                  </ListItem>
                  <ListItem component={Link} to='/tvseries' >
                    <ListItemText sx={{color: "white"}} primary="Series"/>
                  </ListItem>
                </List>
              </div>
              <div className="profile-mobile">
                <IconButton component={Link} to='/profile' >
                   <img style={{height: "35px" , background: "rgba(255, 255, 255, 0.5)", padding: "2px" , borderRadius:"50%"}} 
                   className="image-profile-mob" src={ user?.photoURL || ''} alt='profile' />
                 </IconButton>  
              </div>
            </Stack>
    </>
    )
}