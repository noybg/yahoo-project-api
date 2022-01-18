
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const logout = () => {
        localStorage.removeItem('token')
        window.location = '/'
    }
    return (
        <header>
           <nav>
               <ul>
                   
                   {
                        localStorage.getItem('token') && <>
                        <li onClick={logout}>Logout</li>
                        </>
                   }
                   
               </ul>
            </nav> 
        </header>
    )
}

export default Header
