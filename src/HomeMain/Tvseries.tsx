import './home.scss'
import { Container, Stack } from '@mui/material'
import {styled} from '@mui/system'
import { SeriesGrid } from './seriesgrid'
import { Airing } from './seriesComponent/AIringToday'
import { SeriesRating } from './seriesComponent/Series.Rated'
import {motion , easeInOut} from 'framer-motion'
const StackContent = styled(Stack) ({
    paddingTop: "30px",
    padding: '10px 5px'
    //  minHeight : "100vh"
})

const mainVar = {
    from : {x : "100vw"} ,
    to : {x : 0, 
      transition : {
        type : "spring",
        when : "beforeChildren",
        staggerChildren : 0.2,
        mass : 0.5,
        damping : 8
      }
    },
    exit : {x : "-100vw",
    transition : {
      ease : easeInOut
    }
  
  
    }
  }


export function Tvseries () {
    return (
        <motion.div 
        variants={mainVar}
        initial="from"
        animate="to"
        exit='exit'
         className="movies">
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
    </motion.div>
    )
}






