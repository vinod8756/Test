import React from 'react';
import classes from './Dashboard-card.module.css'

const Dashboardcard = (props) => {
    return (
        <div className = {classes.card}>
            <div className = {classes.header}>
            <h3 className = {classes.headertext}>{props.headertext}</h3>
            <button className = {classes.button}>See all</button>
            </div>

            <table >
            <tr>
            <th>{props.th1}</th>
            <th>{props.th2}</th>
            <th>{props.th3}</th>
            <th>{props.th4}</th>
            </tr>
            <tr>
                <td>{props.td1}</td>
                <td>{props.td2}</td>
                <td>{props.td3}</td>
                <td>{props.td4}</td>
            </tr>
            <tr>
                <td>{props.td1}</td>
                <td>{props.td2}</td>
                <td>{props.td3}</td>
                <td>{props.td4}</td>
            </tr>
            <tr>
                <td>{props.td1}</td>
                <td>{props.td2}</td>
                <td>{props.td3}</td>
                <td>{props.td4}</td>
            </tr>
            <tr>
                <td>{props.td1}</td>
                <td>{props.td2}</td>
                <td>{props.td3}</td>
                <td>{props.td4}</td>
            </tr>
            </table>
           
        </div>
    );
};

export default Dashboardcard;