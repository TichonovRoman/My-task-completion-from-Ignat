import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './menu.module.css'



function Header() {
    return (
        <div  className={s.navlinks}>
            <NavLink to={PATH.PRE_JUNIOR}>
                PreJunior
            </NavLink>

            <NavLink to={PATH.JUNIOR}>
                Junior
            </NavLink>
            <NavLink to={PATH.JUNIORPlus}>
                Junior+
            </NavLink>

        </div>

         )
}

export default Header
