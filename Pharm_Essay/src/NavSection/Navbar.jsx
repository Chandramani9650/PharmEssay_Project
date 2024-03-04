import { Link } from "react-router-dom"
import '../Style/header.css'
import { AiFillThunderbolt } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMobile2 } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

import Home from "../HomeSection/Home";
import React from "react";
import Login from "../HomeSection/Login";
import BasicUsage from "../HomeSection/HealthcareDropDown";
import ChooseLocation from "../HomeSection/ChooseLocation";
function Navbar(){
    return(
        <div className="head">
         <ul className="header ">
            <div>
            <li><Link to='/'><img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" alt="" /></Link></li>
            <li><ChooseLocation/></li>
            </div>
           <div>
           <li><Link to={'https://pey.onelink.me/3krD/2bwqxjrj'}><p className="flex bg-slate-200 rounded p-2"><CiMobile2 className="-mt-1 text-3xl" /> <span>Download App</span></p></Link></li>
            <li><Link><p className="flex"><IoPersonOutline className="m-1 text-xl " /> <span><Login/></span></p></Link></li>
            <li><Link to={'https://pharmeasy.in/offers?src=header'}><p className="flex"><BiSolidOffer  className="m-1 text-xl " /> <span>Offer </span></p></Link></li>
            <li><Link to={'https://pharmeasy.in/cart?src=header'}><p className="flex"><BsCart2 className="m-1 text-xl" /> <span>Cart</span></p></Link></li>
           </div>
         </ul >

         <ul className="navbar">
            <div className="m-auto w-full justify-center">
            <li><Link to={'https://pharmeasy.in/online-medicine-order?src=homecard'}>Medicene</Link></li>
            <li><Link to={'https://pharmeasy.in/diagnostics?src=homecard'}>Lab Tests</Link></li>
            <li><Link to={'https://pharmeasy.in/health-care?src=homecard'}> <p className="flex"> <span className=" ml-2"></span>Healthcare <BasicUsage></BasicUsage></p></Link></li>
            <li><Link to={'https://pharmeasy.in/blog/'}>Health Blogs</Link></li>
            <li><Link to={'https://pharmeasy.in/plus?src=homecard'}>Plus</Link></li>
            <li><Link to={'https://pharmeasy.in/offers?src=homecard'}>Offers</Link></li>
            <li><Link to={'https://pharmeasy.in/#selectPincode'}>Value store</Link></li>
            </div>

         </ul>

         <Home/>
        
        </div>
    )
}

export default Navbar