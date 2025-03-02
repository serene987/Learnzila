import * as AiIcons from 'react-icons/ai';
import * as CgIcons from "react-icons/cg";
// import navStyles from '../sidenav/Sidenavbar.css';

// import  { useState } from 'react';
import { Link } from 'react-router-dom';
// import { IconContext } from 'react-icons';

export default function Topnav(){


    return(
        <>
            <div className="topnav">
                <ul className="nav-menu">
                    <li className="nav-items">
                         <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>    
                    </li>    
                    <li className="nav-items">
                        <Link to='#' className='profile'>
                            <CgIcons.CgProfile />
                        </Link>     
                    </li>    
                    <li className="nav-items">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>     
                        
                    </li>    
                    <li className="nav-items">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>     
                    </li>    
                </ul>    
            </div>        
        </>
    );
};