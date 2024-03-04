import { Link } from "react-router-dom";
import { TiDocumentText } from "react-icons/ti";
import Categories from "./Categaries";
import DataStorage from "./DataStorage";
import SearchBar from "./SearchBar";
import Footer from "./footer";
import MiddleHome from "./MiddleHome";
// import HealthcareDropDown from "./HealthcareDropDown";

function Home(){
    return(

        <div>
          <div className="flex justify-around mt-5">
            <h2 className="font-bold text-xl">What are you looking for?</h2>
            <p className="flex"><TiDocumentText  className="text-2xl"/> <span>Order with prescription.</span> <Link className="text-lime-800 font-bold">UPLOAD NOW</Link></p>
          </div>
          <SearchBar/>
          <DataStorage/>
       
          <Footer/>
          {/* <HealthcareDropDown/> */}
        </div>
    )
}

export default Home;