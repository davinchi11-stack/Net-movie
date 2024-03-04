import { Outlet } from "react-router-dom"


export function Wrapper () {
    return <div className="wrapper">
        {/* <h1>text dynamic url</h1>
        <Link to='/'>Home</Link> */}
        
        <main className="Wrapper-body">
            <Outlet/>
        </main>
    </div>
}