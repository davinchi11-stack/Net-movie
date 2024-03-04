import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions'; 
import Button from '@mui/material/Button'
import {styled} from '@mui/system';
import { Stack, Box , Typography} from '@mui/material';
import TextField from '@mui/material/TextField'
import { useSigninStyle } from '../Hook/UseSigning';
import {Link} from 'react-router-dom'


const StyledDialog = styled(Dialog)({
    '& .MuiPaper-root': {
        background: "#000",
        width: "30%" ,
        height: "80svh",
         '@media (max-width: 800px)': {
            background: "#000",
            height: "100svh",
             width: "100%" ,
         },
         '@media (min-width: 801px)': {
            width: "50%" 
         },
         '@media (min-width: 1100px)': {
            width: "35%" 
         },
      },

      '@media (max-width: 800px)': {
        background: "#000",
        height: "100svh",
         width: "100%" ,
          position: "fixed",
          top: '0' ,
          left: '0' ,
          right :" 0",
      },
})



export function DialogForm (props: any ) {
   // const {StyledTextfield} = useStyled()
   const {StyledTypography} = useSigninStyle()
    const { open ,
            handleClose,
            handleSubmit ,
             register ,
             onsubmit , 
             errorsPassword , 
             errorsEmail , 
             errorsName,
             authErrors
            } = props
    return (
        <>
        <StyledDialog open={open} onClose={handleClose} fullWidth>
        <form noValidate autoComplete='off' autoCorrect='off' onSubmit={handleSubmit(onsubmit)}> 
        <DialogTitle color={'white'}>Enter password </DialogTitle>
        <DialogContent>
        <Stack
        spacing={2}
        marginTop={2}
        >
         <TextField
         label='Name'
         {...register("name")}
         sx={{
            '& .MuiFormHelperText-root': {
               color: 'red', 
               '& span' :{
                  display: "block",
               },
            },
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
         }}
         helperText={
            <> 
              {authErrors && <span>{authErrors}</span>}
              <span>{errorsEmail || ''}</span>
               <span>{errorsName || ''}</span>
            </> 
          }
         />
        <TextField
          label="Password"
          type='password'
          {...register("password")}
          helperText={
            <> 
               <span>{errorsPassword || ''}</span>
            </> 
          }
          sx={{
            '& .MuiFormHelperText-root': {
               color: 'red', 
               '& span' :{
                  display: "block",
               },
            },

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
           
          }}
          />
           <Button type="submit" sx={{textTransform : "capitalize"}} variant='contained'>Register</Button>
           <Box
                sx={{display:"flex" , gap :"8px"}}
                >
                <Typography variant="caption" color='#ccc' >Have an account?</Typography>
               <StyledTypography variant="caption" color='white'>
               <Link to='/signin'> Login</Link>
                </StyledTypography>  
                </Box>
        </Stack>
        </DialogContent>
        </form> 
        <DialogActions sx={{position :"absolute", bottom:"100px", right:"0"}}>
         <Button onClick={handleClose}> Go back</Button>
        </DialogActions>
        </StyledDialog>
        </>
    )
}