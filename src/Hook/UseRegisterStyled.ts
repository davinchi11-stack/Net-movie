import TextField from '@mui/material/TextField'
import { styled } from "@mui/system";
import Typography  from "@mui/material/Typography";
import Button from '@mui/material/Button'


export const useStyled = () => {
    const StyledTextfield = styled(TextField)({
        "input" : {
           background : 'rgba(255,255, 255, 0.06)',
           fontSize: '15px',
        },
        "& .MuiInputBase-input" : {
           color : "white"
        },
        "& label" : {
           color : '#ccc' ,
           fontSize: '13px',
        },
        "& label.Mui-focused" : {
           color : '#ccc' 
        },
        "& .MuiOutlinedInput-root" : {
            '& fieldset' : {
                borderColor : 'rgba(255,255, 255, 0.198)'
            },
            '&:hover fieldset' : {
               borderColor : 'rgba(255,255, 255, 0.7)'
           },
           '&.Mui-focused fieldset' : {
               borderColor : 'rgba(255,255, 255, 0.7)'
           }
        }
        
   })

   const TypoMain = styled(Typography)({
    fontWeight : "700",
    letterSpacing: "1px",
    fontSize : "3em",
    '@media(max-width: 1059px)': {
       fontSize : "2.8em"
    },
    '@media(max-width: 995px)': {
       fontSize : "2.4em"
    },
    '@media(max-width: 866px)': {
       fontSize : "2em"
    },
    '@media(max-width: 730px)': {
       fontSize : "1.2em"
    }, 
})

const StyledButton = styled(Button)({
    textTransform : "capitalize",
      fontSize :" 18px",
      height : 54,
      '@media(max-width: 800px)' : {
         fontSize :" 15px",
         height : 49,
      }
 })

   return {StyledTextfield , TypoMain , StyledButton}
   
}