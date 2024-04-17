import './home.scss'
import { Container, Stack } from '@mui/material'
import {styled} from '@mui/system'
import { SeriesGrid } from './seriesgrid'
import { Airing } from './seriesComponent/AIringToday'
import { SeriesRating } from './seriesComponent/Series.Rated'
const StackContent = styled(Stack) ({
    paddingTop: "30px",
    padding: '10px 5px'
    //  minHeight : "100vh"
})


export function Tvseries () {
    return (
        <div  className="movies">
        <Container>
           <StackContent
           gap={5}
           >
               {/* <Typography variant='h4' color={"#fff"}>Series</Typography> */}
               <SeriesRating/>
               <SeriesGrid/>
                <Airing/>
           </StackContent>
        </Container>
    </div>
    )
}






