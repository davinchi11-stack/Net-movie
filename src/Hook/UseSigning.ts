import {  Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import { styled } from "@mui/system";

export const  useSigninStyle = () => {
    const MainTypo = styled(Typography)({
        fontSize : "20px",
        padding : "10px 0",
        marginBottom: '10px',
        fontWeight: 700
      })
      
      const SignInput = styled(TextField)({
         '& .MuiFormHelperText-root': {
            color: 'red', 
            '& span' :{
               display: "block",
            },
         },
          width : 300,
            '@media(max-width: 800px)' : {
          width : "100%"
       },
          "input" : {
              background : 'rgba(255,255, 255, 0.06)',
              fontSize: '15px',
           },
           "& .MuiInputBase-input" : {
              color : "white",
              height: "15px"
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
      
      const StyledTypography = styled(Typography)({
          'a':{
              textDecoration:"none",
              color: "white"
          }
      })
      
      const CapTypography = styled(Typography)({
         fontSize:"9px"
      })

     return {
        MainTypo,
        StyledTypography,
        SignInput,
        CapTypography
     }
}


