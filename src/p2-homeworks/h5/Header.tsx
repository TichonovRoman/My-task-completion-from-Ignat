import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './menu.module.css'


function Header() {
    return (
        <div className={s.navlinks}>

            <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.JUNIORPlus}>Junior+</NavLink>
            <img src={'https://blog.4d.com/wp-content/uploads/2017/08/UX2.png'} alt={"Наведи на меня"}/>

        </div>

    )
}

export default Header
