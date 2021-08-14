import React from 'react';
import classes from './nav-menu.module.css'

const Menu = () => {
    return (
        <div className= {classes.menu}>
            <p>Dashboard</p>
            <p>Admin</p>
            <hr/>
            <p>Fleet Owners</p>
            <p>Owner operators</p>
            <p>Drivers</p>
            <p>Trailers</p>
            <hr/>
            <p>Add Load</p>
            <p>Loads</p>
            <hr/>
            <p>Customers</p>
            <hr/>
            <p>Settings</p>
        </div>
    );
};

export default Menu;