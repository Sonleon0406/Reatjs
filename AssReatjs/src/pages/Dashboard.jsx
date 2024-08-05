// import { useRouteLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helperrs";
export function dashBoardLoader(){
    const userName = fetchData('userName');
    return  {userName}
}
const DashBoard = () =>{
    const {userName} = useLoaderData();
    return(
        <div>
            <h2>{userName}</h2>
            DashBoard
        </div>
    )
}
export default DashBoard;