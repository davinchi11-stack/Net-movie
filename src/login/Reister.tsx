import {  Stack, Typography } from "@mui/material";
import  ArrowForwardIos  from "@mui/icons-material/ArrowForwardIos";
import { Header } from "./header";
import { useStyled } from "../Hook/UseRegisterStyled";
import { useState } from "react";
import { DialogForm } from "./Dailog";
import TextField from '@mui/material/TextField'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useFormValidation } from "../Hook/UseFormVali";
import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useContext } from "react";
import { userContext } from "../App";




interface FormData{
    name: string;
    email : string;
    password :string
}

export function Register () {
  const { setUserLogged}: any = useContext(userContext)
    const {schema} = useFormValidation()
    const [authErrors , setAuthErrors] = useState("")
    const {register , handleSubmit, formState : {errors} , getValues , reset} = useForm({
        resolver : yupResolver(schema)
    })

  

    const onsubmit = async  (data: FormData) => {
        try {
          await createUserWithEmailAndPassword(auth , data.email , data.password).then(cred=> {
              const userCred = cred.user
               updateProfile(userCred, {
                displayName : data.name,
                 photoURL : `https://api.dicebear.com/7.x/adventurer/svg?seed=${data.name}`
              }).then(()=> {
                const user = auth.currentUser;
                const userInfo = {
                  name: user?.displayName,
                  photo: user?.photoURL,
                  email : user?.email,
                  isUser : true
                };
                localStorage.setItem("authSign", JSON.stringify(userInfo))
                setUserLogged(true)
              })
              
              setOpen(false)
              reset()
           })
           
         
        } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
                setAuthErrors("email is in use , try another email")
              }else if(error.code === 'auth/network-request-failed'){
                setAuthErrors('check your internet and try again')
              }else {
                setAuthErrors('error occured')
              }
        }
        
         setAuthErrors("")
        
    }


    
    const [open , setOpen] = useState(false)
    const [emailErr , setEmailErr] = useState(false)
    
 

    const handleOpen = () => {
        setEmailErr(false)
      const emailValue  = getValues()
        if(!emailValue.email || emailValue.email.trim() === ""){ 
            setOpen(false)
            setEmailErr(true)
        }else{
            setOpen(true)
            setEmailErr(false)
            
        }
        
    
    }
    const handleClose = () => {
        setOpen(false)
     }



    const {TypoMain , StyledButton} = useStyled()
    return (
        <div className="register">
             <Header/>
            <Stack
             alignItems={'center'}
             justifyContent={'center'}
             textAlign={'center'}
             spacing={3}
             height={'80vh'}
            >
               <Stack 
                spacing={2}
               >
                <TypoMain variant="h3" color="white">Unlimited movies, TV shows, and more</TypoMain>
                <Typography variant="body2" color="white" >Watch anywhere , Cancel anytime</Typography>
                <Typography variant="body2" color="white" >Ready to watch? Enter your email to create or restart your menbership</Typography>
               </Stack>
               <form className="register-Form" noValidate autoComplete="off" onSubmit={handleSubmit(onsubmit)}> 
               <Stack
               direction={{md: "row"}}
               spacing={{xs: 2 , md: 1}}
               alignItems={'center'}
               >
                 <TextField
                  label='Email address'
                  type='email'
                  error={emailErr}
                  {...register("email")}
                  sx={{
                    width: 300 ,  
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
                 <StyledButton  onClick={handleOpen} sx={{width: 200}} variant="contained" endIcon={<ArrowForwardIos/>}>Get Started</StyledButton>
               </Stack>
                 <DialogForm 
                 open={open} 
                 handleClose={handleClose}
                  register={register}
                  onsubmit={onsubmit}
                  handleSubmit={handleSubmit}
                  errorsPassword={errors.password?.message}
                  errorsEmail={errors.email?.message}
                  errorsName={errors.name?.message}
                  authErrors={authErrors}
                  />
               </form>
            </Stack>
        </div>
    )
}