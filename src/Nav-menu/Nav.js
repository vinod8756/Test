import React from 'react';
import classes from './nav-menu.module.css'

const Nav = (props) => {
    return (
        <div>
            <nav className = {classes.Nav}>
                <h3 className = {classes.headertext}>JustDilever</h3>
                <button className = {classes.button} onClick = {props.click}>Logout</button> 
            </nav>
        </div>
    );
};

export default Nav;