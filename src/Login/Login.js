import React, { useState } from 'react';
import classes from './Login.module.css'


const Login = (props) => {

    const [details , setdetails] = useState({email_id : "" , password : ""})
   
console.log(props.err)

    const SubmitHandler = (e) => (
        console.log("working"),
        e.preventDefault(),
      props.details(details)
    )
   
let error 

if (props.err) {
  error =  <label style = {{color : props.err ? 'red' : 'black'}} >Invalid username and password</label> 
}


    return (
        <form className = {classes.Form} onSubmit = {SubmitHandler}>
            <img alt = "logo of company"  className = {classes.img} />
             {error}
            <input type = "email" placeholder = "Email_Id" className = {classes.email} style = {{borderColor : props.err ? 'red' : 'black'}} onChange = {e => setdetails({...details , email_id : e.target.value}) } value = {details.email_id} />
            <input type = "password" placeholder = "Password" className = {classes.password} style = {{borderColor : props.err ? 'red' : 'black'}} onChange = {e => setdetails({...details , password : e.target.value}) } value = {details.password} />
            <input type = "submit" value = "Login" className = {classes.loginbutton}/>
            
        </form>
    );
};

export default Login;