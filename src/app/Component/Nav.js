import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react"
function Nav(){
    const navRef = useRef();
    
    const showNavbar =()=>{
        navRef.current.classlist.toogle("reponsive_nav");

    }
    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">About US</a>
                <a href="#">Contact US</a>
                <button  className= "lg:hidden" onClick={showNavbar}><FaTimes/></button>
            </nav>
            <button  className= "lg:hidden" onClick={showNavbar}>
                <FaBars/>
            </button>
            </header>
    )
}