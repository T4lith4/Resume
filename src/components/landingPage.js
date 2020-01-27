import React, { Component } from "react";
//import react-mdl components
import { Grid, Cell, FABButton } from "react-mdl";
import { Link } from "react-router-dom";
//import animation components
import styled, { keyframes } from "styled-components";
//import animation "rotate"
import { zoomInUp } from "react-animations";
//import picture

import "../App.css";
//import stylesheet

//Here I define the actual animation 
const rotateAnimation = keyframes`${zoomInUp}`;
//Here I set specifics about how long I want the animation to last, and the delay time
const Rotate = styled.div`
  animation:  ${rotateAnimation} 3s infinite;
 
`;

/*The Landing Page consists of a rotating picture of myself, as well as a welcome message */
class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12} style={{marginTop:"110px"}}>
         
              <div className="intro">
         <h1>Hi! I'm Talitha</h1> 
              <h4> I am a Full Stack Web Developer</h4>
              <p>
                React | HTML | CSS | Javascript | Express JS | MongoDB | Node JS
              </p>
              <FABButton
                mini
                colored
                style={{ marginRight: "20px", marginLeft: "50px" }}
              >
                <Link to="https://github.com/T4lith4/">
                  <i className="fab fa-github"></i>
                </Link>
              </FABButton>
              <FABButton mini colored style={{ marginRight: "20px" }}>
                <Link to="https://www.linkedin.com/in/talitha-kruger-3a7b07175/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </FABButton>
              <FABButton mini colored style={{ marginRight: "20px" }}>
                <a
                  href="mailto:talkruger9@gmail.com?Subject=Dear%20Talitha"
                  target="_top"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </FABButton>
              </div>
              <br/>
              <h4 className="workAnimation"><Rotate>See my work <br/> &#8595;</Rotate></h4>
              <h2> <a href="#projects"><i class="fas fa-briefcase"></i></a></h2>
             
            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
