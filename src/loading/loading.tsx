import { Stack } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import './loading.scss'


export function Loading () {
    return (
        <div className="loading">
        <Stack
        justifyContent={"center"}
        alignContent={"center"}
        >
           <CircularProgress />
        </Stack>
        </div>
       
    )
}