import { Box, Container, Stack, Typography } from "@mui/material"
import logo from '../assets/Vector__3_.svg'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSigninStyle } from "../Hook/UseSigning";
import { styled } from "@mui/system";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {auth} from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import TextField from '@mui/material/TextField'
import { useState , useContext } from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";



const StyledStack = styled(Stack)({
  '@media(max-width: 800px)' : {
    alignItems : 'start' ,
    justifyContent :'start',
  }
})

const StyledButton = styled(Button)({
    '@media(max-width: 800px)' : {
        width: "100%"
    }
  })

  interface Sign {
    email : string;
    password: string
  }

export function SignIn () {
  const [logErrors , setLogErros] = useState("")
  const {setUserLogged}: any = useContext(userContext)
  const navigate = useNavigate()

  const schema = yup.object().shape({
    "email" : yup.string().email().required("email is required"),
    "password" : yup.string().required("password is required").min(6 , "password too short")
})

  const {register, handleSubmit , formState : {errors}, reset} = useForm({
     resolver: yupResolver(schema)
  })

  const onsubmit = async (data : Sign)=> {
     try {
        await signInWithEmailAndPassword(auth , data.email , data.password).then(cred => {
         const user = cred.user
          const userInfo = {
            name: user?.displayName,
            photo: user?.photoURL,
            email : user?.email,
            isUser : true
          };
          localStorage.setItem("authSign", JSON.stringify(userInfo));
          setUserLogged(true)
          navigate("/")
          reset()
        })
       
     } catch (error: any) {
         if(error.code === 'auth/invalid-email'){
           setLogErros("invalid email")
         }else if(error.code === "auth/user-not-found"){
          setLogErros("user not found")
         }else if(error.code === 'auth/wrong-password'){
          setLogErros("wrong email or password")
         }else if(error.code === 'auth/invalid-credential'){
          setLogErros("wrong email or password")
         }
         else{
          setLogErros("error occured")
         }
        
     }
     setLogErros("")
  }
    const {MainTypo , StyledTypography, CapTypography} = useSigninStyle()
    
    return <div className="sign-in">
        <Container> 
        <header className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </header>
        <StyledStack
        alignItems={'center'}
        justifyContent={'center'}
        >
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onsubmit)}>
            <MainTypo color='white' variant="h4">Sign in</MainTypo>
            <StyledStack
               alignItems={'center'}
               justifyContent={'center'}
               spacing={1}
            >
                <TextField
                fullWidth
                label='Email'
                {...register("email")}
                helperText={ 
                   <>
                     <span>{ logErrors || ''}</span>
                     <span>{errors.email?.message}</span>
                   </>
                }
                 sx={{
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
  
              
                 }}
                />
                <TextField
                label='password'
                fullWidth
                type="password"
                {...register("password")}
                helperText={ 
                  <>
                    <span>{errors.password?.message}</span>
                  </>
               }
               sx={{
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

            
               }}
                />
                <StyledButton type='submit' sx={{width: 300, textTransform: "capitalize"}} variant='contained'>Sign in</StyledButton>
                <Typography sx={{alignSelf:"center"}} variant="caption" color='white'>Forget password?</Typography>
            </StyledStack>
            <Stack
            width={"200px"}
            marginTop={8}
            spacing={1}
            >
                <Box
                sx={{display:"flex" , gap :"8px"}}
                >
                <Typography variant="caption" color='#ccc' >New to Netflix?</Typography>
               <StyledTypography variant="caption" color='white'>
               <Link to='/'>  Sign up now</Link>
                </StyledTypography>  
                </Box>
                <CapTypography variant="caption" color='#ccc' >This page is protect by Google reCAPTCHA to ensure you are not a bot</CapTypography>
            </Stack>
          </form>
        </StyledStack>
        </Container>
    </div>
}