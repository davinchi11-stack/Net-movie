# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


<!-- 
 what have been able to learn so far in this project is that i can authenticate and sign up user usinf email and password
 createUserWithEmailAndPassword(auth , email, password).then(cred => {
     const user = cred.user this contains information about the user but at it is user don't have any othrt information only email and uid 
     so we can update the profile by import updateProfile from firebase/auth
     await updateProfile(user , {
       name : user.displayName,
       email: user.email,
       photoUrl : "
     }).then(()=> {
      we store this information in localstorage
        const auth = auth.currentUser

        const userInfo = {
          name : user.displayName,
          email: user.email,
          phtot: user.photoUrl,
          issuerLoggedIn: true
        }
        localStorage.setItem("user", JSON.stringfy(userInfo))
     }) if you notice we we're able to do this by applying the then method and getting the information from the currunt auth
 })


 another thing we aare able to learn is that we diaplay the errors we got in the helperText that dislays thevalidation erros 
 we strored the result we got back from the error in a state

 const [errorMeg , setErrorsMegs] = useState("") its set to an empty string 

 then in the catch(error){
    eg if (error.code === 'auth/users exits'){
      setErrrosMegs('user exist')  // at this point the erroMesage we become what we specify
    }else if (errro.code === 'auth/ netword failed'){
      setErrorsMegs("check your internet")
    }else{
      setErrosMeg("error occured)
    }
    at this point the erroMegs can be different at any point of state
 }

 to display it 

 helpText={
   <>
   <span>{errorMeg || ''}</span>
   </>
 }

 /// in terms of styling we were able to achive both the dialog as weel as the form to have full screen at a max-width specilfield

 by just specilfying
 position fixed
 top 0
 width 100%
 height 100vh
 left 0 
 right 0 if nessacery
 background most importantly  always specify background 
 this method is also used in creating mobile standard from menu list 
 the only diffrence is that we send the nav by tranfor tranlate(x) -3000 and return it as some certain viewport also a state to togle between it to so or to go back
 
 one thing have i learnt in this project is understanding rendation of components when the user is loged in or not
 we can store a boolean in our userInfo in the localstorage eg
 isUserLogedIn : true
 we can then get this boolean and short circuit or router if  isUserLogedIn ? <Home> : <Loging/>

 i was having issues with how my white text will be rendered on diffrent pictures im fetching from the api 
 i was able to understand to be able to achive that i need to give the picture a fading color by overlaying it 
 just like what we did to the picture at the login page


 to finailse hoe the authntication of pages we where able to use local storage to store the state 
 and able to share the stae across the codeBae by useing useContext 

const storedUser = localStorage.getItem("userLogged)
 const [userLogged , setUserLogged] = useState(storedUser ? JSON.parse(storedUser) : false)
 we getting the storedUser from  the localstrage even if it doesnt exits by that it will give use null 
 but we conditional check it which (storedUser ? JSON.parse(storedUser) : false) if it doesnt exist yet it will give false by defualt
 
 then we can a useEffect

 useEffect(()=> {
   localStorage.setItem("userLogged", JSON.stringify(userLogged))
 }, [userLogged])

so what it checks is that any where the setLogged as been called and be used in the case after looging it changes 
 setUserLogged(true)  it updates the current state to the localsorage "userLogged"

 lastly we use the state to check the components

 !userLogged ? <Login/> : <Home/>
 -->