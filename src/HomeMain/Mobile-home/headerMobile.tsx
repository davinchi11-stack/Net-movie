
import  ListItem from '@mui/material/ListItem'
import logo from '../../assets/new.png'
import ListItemText from '@mui/material/ListItemText'
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import { Link } from "react-router-dom";
import {motion , useAnimation} from 'framer-motion'
import { useHeaderAnimation } from "../../Hook/useHeaderAnimation";
import { useEffect } from 'react';


export function HeaderMobile (props: any) {
  const  {headVar , logoVar , profileVar , listOne , listTwo , drawer} = useHeaderAnimation()
  const control = useAnimation()

  useEffect(() => {
     setTimeout(() => {
        control.start("to")
     }, 3800);
  }, [control]);
    const {user} = props
    return (  
    <motion.div
       variants={headVar}
         initial="from"
         animate={control}
    >
        <motion.div variants={drawer} className="stack-mobile"  
        >
              <div className="log-mon">
              <IconButton component={Link} to='/'>
              <motion.img variants={logoVar}  className="logo-mobile" src={logo} alt='profile' />
                </IconButton>
              </div>
              <div className="nav-mobile">
                <List sx={{display: "flex"}} className="list">
                  <ListItem component={Link} to='/movies' >
                    <motion.div variants={profileVar}><ListItemText sx={{color: "white"}}  primary="Movie"/></motion.div>
                  </ListItem>
                  <ListItem component={Link} to='/tvseries' >
                    <motion.div variants={listOne}><ListItemText sx={{color: "white"}} primary="Series"/></motion.div> 
                  </ListItem>
                </List>
              </div>
              <div className="profile-mobile">
                <IconButton component={Link} to='/profile' >
                   <motion.img variants={listTwo} style={{height: "35px" , background: "rgba(255, 255, 255, 0.5)", padding: "2px" , borderRadius:"50%"}} 
                   className="image-profile-mob" src={ user?.photoURL || ''} alt='profile' />
                 </IconButton>  
              </div>
            </motion.div>
    </motion.div>
    )
}