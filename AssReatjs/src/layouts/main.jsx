// import { useRouteLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helperrs";
export function mainLoader(){
    const userName = fetchData('userName');
    return  {userName}
}
const Main = () =>{
    const {userName} = useLoaderData();
    return(
        <div>
            <h2>{userName}</h2>
            Main
        </div>
    )
}
export default Main;