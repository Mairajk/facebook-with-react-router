import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./style.css"

import  Home  from "../Home/index";
import  Groups  from "../Groups";
import  Friends  from "../Friends";
import  Games  from "../Games";
import  Videos  from "../Videos";

// import fbLogo from './images/fb logo.png'
// import profilePhoto from './images/dp.jpg'

import { TbGridDots } from "react-icons/tb";
import { RiMessengerFill } from "react-icons/ri";
import { VscHome } from "react-icons/vsc";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPeopleFill, BsFillBellFill } from "react-icons/bs";
import { MdOutlineOndemandVideo, } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";

import ToggleFunction from './ToggleButton/toggle';



let NavBar = () => (

    
<div>    
        <Router>
    <nav className='navBar'>

        <div className='left'>

            <div>
                {/* <img src={fbLogo} alt="" className='facebookLogo' /> */}
            </div>

            <div className='inputDiv'>
                <label htmlFor="search">
                    <i className="searchLogo leftLogo navLogo"><BiSearchAlt2 /></i>
                </label>
                <input type="search" placeholder='Search Facebook' />
            </div>

        </div>



            <div className="center">

                <ul>

                    <li><Link to="/">
                        <i className='homeLogo centerLogo navLogo'><VscHome /></i>
                    </Link></li>

                    <li><Link to="/Friends">
                        <i className='friendsLogo centerLogo navLogo'><BsFillPeopleFill /></i>
                    </Link></li>

                    <li><Link to="/Videos">
                        <i className='watchLogo centerLogo navLogo'><MdOutlineOndemandVideo /></i>
                    </Link></li>

                    <li><Link to="/Groups">
                        <i className='groupsLogo centerLogo navLogo'><HiUserGroup /></i>
                    </Link></li>

                    <li><Link to="/Games">
                        <i className='gamingLogo centerLogo navLogo'><SiFacebookgaming /></i>
                    </Link></li>

                </ul>

            </div>


        <div className="right">
            <ToggleFunction />
            <div><i className="menuLogo rightLogo navLogo"><TbGridDots /></i></div>
            <div><i className="messengerLogo rightLogo navLogo"><RiMessengerFill /></i></div>
            <div><i className="bellLogo rightLogo navLogo"><BsFillBellFill /></i></div>
            {/* <div> <img className="navProfilePhoto rightLogo navLogo " src={profilePhoto} alt="" /></div> */}
        </div>

    </nav>
    <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Friends" element={<Friends />} />
                <Route path="Groups" element={<Groups />} />
                <Route path="Videos" element={<Videos />} />
                <Route path="Games" element={<Games />} />
            </Routes>

        </Router>

</div>
);

export default NavBar;
