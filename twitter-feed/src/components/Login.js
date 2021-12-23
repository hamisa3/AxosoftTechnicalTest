import React, { Component } from 'react';
import './Login.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export class Login extends Component {

  render() {


    return(
      
        <div class="wrapper fadeInDown background body" >
          <div id="formContent">
            
            <h2 class="active"> Sign In </h2>
        
            
            <div class="fadeIn first">
              <img src="images/twitterIcon.png" id="icon" alt="User Icon" class = "img" />
            </div>
        
            
            <div>
              <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/> 
              <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
              <input type="submit" value="Log In" href= "/feed" />
            </div>
            
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
            </div>
          </div>
      </div>
    )
  }
}


