import {Box, Stack } from "@mui/material";
import {useQuery} from '@tanstack/react-query'
import Axios from 'axios'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Loading } from "../../loading/loading";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography'
import logo from '../assets/new.png'

interface DataMovie{
    poster_path : string;
    title: string
    id :  number
}


const ratedMovies = () => {
    return  Axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2QyYTk1ZTFiZTkzNzY1M2NiNThjMzk0OTZkZDgyMSIsInN1YiI6IjY1YjhiZTg2MzNhMzc2MDE3Yjg2NjcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2iCf2OfMYh6sSydCczno0ESjrikNTfl7cNecevTbbGo'
          }
    }).then((res)=> res.data)
}

export function TopRated (){
    const {data, isLoading} = useQuery({
        queryKey : ['rated'],
        queryFn : ratedMovies
    })

    
    
    
    return (
        <Stack
        justifyContent={"center"}
        >
            {isLoading && <Loading/>}
            <Typography sx={
              {
                marginBottom: "10px",
                '@media(min-width: 900px)': {
                   display: "none"
                }
              }} variant="body1" color='white'>{!data ? "" : 'Top Rated'} </Typography>
              <Box
              sx={{
                display: "flex",
                  position: "sticky", 
                 top: "0" , 
                 background: "#000" ,
                 width:"100%",
                 '@media(max-width: 900px)': {
                  display: "none"
               }
                }}
              >
              <Typography color='white' variant="h5"> {!data ? "" : 'Top Rated'}  </Typography>
              </Box>
            <Grid container spacing={1}>
              {data?.results.slice(0, 9)?.map((data: DataMovie)=> <Grid key={data.id}  sx={{"& a" : {textDecoration: "none"}}} item xs={4} lg={3}>
                <Link to={`/movie/${data?.id}`}> 
                  <Card sx={{background: "#000" , maxWidth: 345}} component={Link} to={`/movie/${data?.id}`} >
                  <CardHeader
                    sx={{
                      background: "black" ,
                       color: "#fff",
                       '@media(max-width: 900px)' : {
                         display: "none"
                       }
                      }}
                    title={data?.title?.slice(0,27) + "..."}
                    titleTypographyProps={{ style: { fontSize: '14px',  display: "inline" } }}
                    />

                  <CardMedia
                    sx={{
                      '@media(max-width: 900px)' : {
                        height: "180px"
                      },
                      '@media(min-width: 530px)' : {
                        height: "200px"
                      },
                      '@media(min-width: 760px)' : {
                        height: "230px"
                      },
                      '@media(min-width: 900px)' : {
                        height: "250px"
                      },
                      '@media(min-width: 960px)' : {
                        height: "300px"
                      }
                    }}
                    component="img"
                    height="300"
                    image={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                    alt="movie"
                />
                  </Card>
                  </Link>
              </Grid>
              )}
            </Grid>
        </Stack>
    )
}
