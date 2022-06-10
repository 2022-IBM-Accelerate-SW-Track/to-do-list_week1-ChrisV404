import React, { Component } from 'react';
import "./About.css";
import christianv from "../assets/christianv.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p><div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src={christianv}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Christian Vasquez</div>
            <div className="brief_description">
              Hello, my name is Christian Vasquez and I'm an undergraduate student at the University of Central Florida majoring in Computer Science.
            </div>
          </div>
        </div>
      </div></p> 
      </div>
    )
  }
}