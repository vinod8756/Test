import React, { useState } from 'react';
import Dashboardcard from '../Dashboard-card/Dashboard-card';
import classes from './Dashboard.module.css'
import dashboarddata from '../Dashboard.json'
import Nav from '../Nav-menu/Nav'
import Menu from '../Nav-menu/Menu';
import Modal from 'react-modal';


const Dashboard = (props) => {

    const [modal , setmodal] = useState(true)

    const logoutHandler = () => {
        props.logout(false)
    }

    const closeModal = () => {
        setmodal(false)
    }

    return (
        <div>
            <Modal isOpen = {modal}  classname = {classes.modal} style= {{
                overlay : {
                   position : 'fixed',
                   top: "0%",
                   left: "0%",
                },
                content : {
                    width : "230px",
                    position : "fixed",
                    top: "25%",
                   left: "45%",
                   height : "150px",
                   textAlign : 'center',
                   borderRadius : "10px"

                }}} >
                <h2>Login Successfull</h2>
                <button onClick = {closeModal} className = {classes.button}>dissmiss</button>
            </Modal>
           
            <Nav click = {logoutHandler} />
            <Menu/>
             <div className = {classes.dashboard} >
            <Dashboardcard  headertext = "Upcoming Loads" th1 = "Bid Number" th2 = "Customer Name" th3 = "Contact Number"  th4 = "Dedline Date" td1 = {dashboarddata.data.bid} td2 = {dashboarddata.data.customername} td3 = {dashboarddata.data.contact} td4 = {dashboarddata.data.deadline} />
            <Dashboardcard  headertext = "Ongoing Loads" th1 = "Bid Number" th2 = "Customer Name" th3 = "Contact Number"  th4 = "Dedline Date" td1 = {dashboarddata.data.bid} td2 = {dashboarddata.data.customername} td3 = {dashboarddata.data.contact} td4 = {dashboarddata.data.deadline} />
            <Dashboardcard  headertext = "Cancelled Loads" th1 = "Bid Number" th2 = "Customer Name" th3 = "Contact Number"  th4 = "Dedline Date" td1 = {dashboarddata.data.bid} td2 = {dashboarddata.data.customername} td3 = {dashboarddata.data.contact} td4 = {dashboarddata.data.deadline} />            
        </div>
        </div>
       
    );
};

export default Dashboard;