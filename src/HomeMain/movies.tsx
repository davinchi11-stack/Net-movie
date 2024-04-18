import './home.scss'
import { Container, Stack } from '@mui/material'
import {styled} from '@mui/system'
import { MovieGrid } from './movieGrid'
import { TopRated } from './moviesComponent/TopRated'
import { Upcoming } from './moviesComponent/Upcoming'
import {motion , easeInOut} from 'framer-motion'

const StackContent = styled(Stack) ({
    paddingTop: "30px",
    padding: '10px 5px',
    // marginBottom : "10px"
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

export function Movies () {
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
                   {/* <Typography variant='h4' color={"#fff"}>Movies</Typography> */}
                   <MovieGrid/>
                   <TopRated/>
                   <Upcoming/>
               </StackContent>
            </Container>
        </motion.div>
    )
}