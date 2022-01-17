import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={`${s.navigation}  navigation navbar-nav`}>
            <div><NavLink to='/tests' activeClassName={s.active}>tests</NavLink></div>
            <div><NavLink to='/loginform' activeClassName={s.active}>loginform</NavLink></div>
        </nav>
    );
};

export default Navigation;