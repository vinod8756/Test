import './App.css';
import React from 'react';
import Login from './Login/Login';
import Credentials from './Credentials.json'
import { useState } from 'react';
import Dashboard from './Dashboard/Dashboard';

const App = () => {

  const [logged , setlogged ] = useState(false)
  const [error , seterror] = useState(false)

  const login = (details) => {
    if (details.email_id === Credentials.user1.email_id && details.password === Credentials.user1.password ) {
      setlogged(true)
      seterror(false)
    }
    else if (details.email_id === Credentials.user1.email_id && details.password === Credentials.user1.password) {
       setlogged(true)
       seterror(false)
    }
    else  {
     seterror(true)
    }
  }

const logoutHandler = (value) => {
  setlogged(value)
}


   
return (
  <div>
    {(logged) ? (
       <Dashboard logout = {logoutHandler} logstatus = {logged}/>
    ) : (
      <Login err = {error} details = {login}/>
    )}



  </div>

)
  
}

export default App;
