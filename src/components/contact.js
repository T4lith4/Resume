import React, { Component } from "react";
//import components from react-mdl
import { Grid, Cell } from "react-mdl";
//import heading animation
import Zoom from "react-reveal/Zoom";
//import stylesheet
import "../App.css";

/*This is my contact component which shows icons which when clicked, take the user to the link, or give my contact details in an alert */
class Contact extends Component {
  render() {
    return (
      <Grid className="contact-grid">
        <Cell col={12}>
          {" "}
          <div class="contactDiv">
            <Zoom>
              <h1 id="contact">Contact Me</h1>
            </Zoom>
            <hr className="contact-line" />

            
          
              
                {" "}
               
               <div className="icon-div">
                <p>
                  <a
                    className="contact-link"
                    href="https://github.com/T4lith4/"
                  >
                    <i className="contact-icons fab fa-github"></i>
                    <br />
                  
                  </a>
                </p>
              
              
                <p>
                  <a
                    className="contact-link contact-link-one"
                    href="https://www.linkedin.com/in/talitha-kruger-3a7b07175/"
                  >
                    <i className=" contact-icons fab fa-linkedin-in"></i>
                    <br />
                   
                  </a>
                </p>
         
             
             
                {" "}
                <p>
                  <a
                    href="mailto:talkruger9@gmail.com?Subject=Dear%20Talitha"
                    target="_top"
                    className="contact-link"
                  >
                    <i className="contact-icons far fa-envelope"></i>
                    <br />
                  
                  </a>
                </p>
            
            
                {" "}
                <p
                  className="call-link"
                  onClick={()=> alert("Reach me at 081 271 3734")}
                >
                  <i class="contact-icons fas fa-phone"></i> <br />
            
                </p>
                </div>
             
            
     
          </div>
          ;
        </Cell>
      </Grid>
    );
  }
}

export default Contact;

/*  <Cell col={6}>half page</Cell>
                <Cell col={6}>half page</Cell>
                
                
                   <Grid className="contact-grid">
          <Cell col={12}>
            <h3 id="contact">Contact</h3>
            <hr className="line" />
          </Cell>
          <Cell col={6}>
            <div className="myDiv">
              <div className="bg"></div>
              Hi there
            </div>
          </Cell>

          <Cell col={6}></Cell>
        </Grid>*/
