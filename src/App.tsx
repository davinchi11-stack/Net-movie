import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from 'react-router-dom'
import { Wrapper } from './wrapper'
import { Register } from './login/Reister'
import { SignIn } from './login/Signin'
import { RegisterMain } from './login/RegsiteMain'
import { createTheme , ThemeProvider } from '@mui/material'
import './App.scss'
import { Home } from './HomeMain/Home'
import { createContext } from 'react'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { Movies } from './HomeMain/movies'
import { Tvseries } from './HomeMain/Tvseries'
import { HomeIndex } from './HomeMain/homeIndex'
import { MovieContent } from './HomeMain/movieContent'
import { SeriesContent } from './HomeMain/seriesContent'
import { Profile } from './HomeMain/Profile'
// import { Loading } from './loading/loading'
import { useState , useEffect} from 'react'


const theme = createTheme({

 palette : {
  primary : {
    main : '#ff1b1b'
  }
 },
 typography : {
  fontFamily : "Montserrat",
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightLight : 400,
  fontWeightBold : 700
 }, 
 
})

export const userContext = createContext({})
const query = new QueryClient()

function App() {

 const userInfo = JSON.parse(localStorage.getItem("authSign") as any)

  const storedUser = JSON.parse(localStorage.getItem("userLoged") as any)
   const [userLoged , setUserLogged] = useState(storedUser ? JSON.parse(storedUser) : false)
   
   useEffect(()=> {
    localStorage.setItem("userLoged", JSON.stringify(userLoged))
   }, [userLoged])


 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Wrapper/>}>
    { !userLoged? <Route path='/' element={ <RegisterMain/>}>
        <Route index element={<Register/>}/> 
          <Route path='signin' element={<SignIn/>}/>
       </Route>  :
        <Route path='/' element={<Home/>}>
            <Route index element={<HomeIndex/>}/>
            <Route path='movies' element={<Movies/>}/>
            <Route path='tvseries' element={<Tvseries/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='/movie/:id' element={<MovieContent/>}/>
            <Route path='/tvseries/:id' element={<SeriesContent/>}/>
        </Route>  }
     </Route>
    
     
  )
)

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={query}> 
        <userContext.Provider value={{userInfo , userLoged , setUserLogged}}>
        <RouterProvider router={router}/>
        </userContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App

