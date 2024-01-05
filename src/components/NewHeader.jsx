import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    
    <nav>
        <ul>
            <li>
                <NavLink
                to = {'/'}
                className={({ isActive}) => {
                    if (isActive) return "active"
                }
            }
                >
                    home
                </NavLink>
                </li>
            <li>
            <NavLink
                to = {'/About'}
                className={({ isActive}) => {
                    if (isActive) return "active"
                }
            }
                >
                    About
                </NavLink>

            </li>
        </ul>
        
         </nav>
  )
}


export default Header