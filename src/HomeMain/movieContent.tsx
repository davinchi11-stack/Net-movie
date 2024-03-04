import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'
import './home.scss'
import { Loading } from "../loading/loading"
import {styled} from '@mui/system'
import logo from '../assets/new.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StyledStack = styled(Stack) ({
    position : "relative",
    zIndex: 1,
    width: 400,
    padding: "10px",
    top: 100,
    left: 100,
    '@media(max-width: 900px)': {
     left: '0',
    }

})


const handleMovieId = (movieId: any) => {
    return  Axios.get( `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2QyYTk1ZTFiZTkzNzY1M2NiNThjMzk0OTZkZDgyMSIsInN1YiI6IjY1YjhiZTg2MzNhMzc2MDE3Yjg2NjcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2iCf2OfMYh6sSydCczno0ESjrikNTfl7cNecevTbbGo'
          }
    }).then((res)=> res.data)
}


export function MovieContent () {
    const {id} = useParams<string>()

    if(!id){
        return <div>invalid id</div>
        
    }

    const {data , isLoading} = useQuery({
        queryKey : ['movie'],
        queryFn : ()=>  handleMovieId(id)
    })

    if(isLoading){
       return  
    }

    
    return (
      <div className="movie-content">
      
        <Container> 
            {isLoading &&  <Loading/>}
           {data &&
          <img className="backdrop" src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}` || ''} alt="backdrop\" />
           }   
             <div className="back">     
         <StyledStack
        spacing={1.5}
         >
            { data && <div className="logo-Movie">
                <img src={logo}  alt="" />
                <span>MOVIES</span>
             </div> 
            }
           <Typography sx={{'@media(max-width:900px)': {display:"none"}}} variant="h4" color="#fff">{data?.title}</Typography>
           <Typography sx={{'@media(min-width:900px)': {display:"none"}, width: "200px"}}  variant="h6" color="#fff">{data?.title}</Typography>
           <Typography  sx={{'@media(max-width:900px)': {display:"none"}}}   variant="body2" color="white">{data?.overview}</Typography>
           <Typography sx={{'@media(min-width:900px)': {display:"none"}, fontSize: "10px" , width: "300px"}} variant='caption' color="white">{data?.overview}</Typography>
            <Box
            >
              <Button startIcon={<PlayArrowIcon/>} sx={{background: "#fff", color:"#000", textTransform: "capitalize" }}>Play</Button>
              <Button sx={{background: "rgba(255,255,255,0.5)", color: "#fff" , textTransform: "capitalize", marginLeft:"10px" }}>More info</Button>
            </Box>
         </StyledStack>
         </div>
         </Container>
      </div>

    )
}