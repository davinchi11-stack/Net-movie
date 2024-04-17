import './home.scss'
import { Container, Stack } from '@mui/material'
import {styled} from '@mui/system'
import { MovieGrid } from './movieGrid'
import { TopRated } from './moviesComponent/TopRated'
import { Upcoming } from './moviesComponent/Upcoming'

const StackContent = styled(Stack) ({
    paddingTop: "30px",
    padding: '10px 5px',
    // marginBottom : "10px"
})

export function Movies () {
    return (
        <div  className="movies">
            <Container>
               <StackContent
               gap={5}
               >
                   {/* <Typography variant='h4' color={"#fff"}>Movies</Typography> */}
                   <MovieGrid/>
                   <TopRated/>
                   <Upcoming/>
               </StackContent>
            </Container>
        </div>
    )
}