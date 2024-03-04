import { Stack} from "@mui/material";
import logo from '../assets/Vector__3_.svg'
import Button from '@mui/material/Button'
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)({
     textTransform :"capitalize",
     fontSize: "14px",
     fontWeight:"600",
     '@media(max-width: 900px)' : {
        fontSize: "10px",
     }
})


export function Header ()  {
    return (
        <div className="header-reg">
            <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            padding={1}
            marginTop={4}
            >
                <div className="logo">
                   <img src={logo} alt="logo"/>
                </div>
                <div className="button">
                   <Link to='/signin'> <StyledButton variant="contained">Sign in</StyledButton> </Link> 
                </div>
            </Stack>
        </div>
    )
}