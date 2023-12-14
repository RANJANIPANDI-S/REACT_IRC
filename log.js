import React from 'react'
import './log.css';
function Logindemo()
{
    return(
        <center>
            <div>
            <div>
                <img src='' ></img>
            </div>
        <div className="container">

        <h2> Login Form </h2>
        <form action="" class="form">
            <label for="userId"><span> Email or Phone </span></label>
            <input type="text" name="username" id="userId"></input>
            <label for="password" value="password"> Password </label>

            <input type="password"></input>

            <button>Login</button>
        </form>

        <p class="newUser">
            <span>Signup now</span></p>
           
             </div>
             </div>
             </center>
    )
}
export default Logindemo;