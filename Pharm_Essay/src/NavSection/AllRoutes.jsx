import { Route, Routes } from "react-router-dom";

import Home from "../HomeSection/Home";
import DownloadApp from "../Header/DownloadApp";
import Login from "../HomeSection/Login";
import SelectPoint from "../Header/Select_Pinpoint";

function AllRoutes(){
    return(
    <div>

        <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Logo" element={<Home/>}/>
        <Route  path="/downloadapp" element={<DownloadApp/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/selectpoint" element={<SelectPoint/>}/>
        

        </Routes>
    </div>


    )
}