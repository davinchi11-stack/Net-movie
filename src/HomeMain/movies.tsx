import './home.scss'
import { Container, Stack } from '@mui/material'
import {styled} from '@mui/system'
import { MovieGrid } from './movieGrid'

const StackContent = styled(Stack) ({
    paddingTop: "30px",
    padding: '10px 5px'
})

export function Movies () {
    return (
        <div  className="movies">
            <Container>
               <StackContent>
                   {/* <Typography variant='h4' color={"#fff"}>Movies</Typography> */}
                   <MovieGrid/>
               </StackContent>
            </Container>
        </div>
    )
}