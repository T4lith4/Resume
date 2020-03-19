import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
//heading animation
import Zoom from "react-reveal/Zoom";
//stylesheet
import "../App.css";
//import picture mindmap
import Skills from "../static/skillset.png";

/*This is my About Component. I have included a short descripton as well as the mindap of my skills */
class About extends Component {
  render() {
    return (
      <div>
        <Grid className="about-grid">
          <Cell col={12}>
            <Zoom>
              {" "}
              <h1 id="about" className="about-heading">
                About Me
              </h1>
            </Zoom>
            <hr className="line" />
            <p className="about-intro">
              {" "}
              I am a 26-year-old who lives in Kempton Park, which is where I
              have lived most of my life. I am an adaptable human, and the most
              punctilous person I know.
              <br />
              <br />
              I love focusing on the look and feel of what I am developing, but
              thanks to my full-stack web developer bootcamp, I am a competent
              MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack developer. Code
              has revolutionized my life and I want to use it to revolutionize
              the lives of others.
              <br /> <br />
              I have a unique background which has equipped me with diverse
              skills. I want to continue to challenge myself and learn and grow
              as a developer while building interesting things that make a
              difference.
              <br /> <br />I am a drummer, reader, dog-owner, music-enthusiast
              and so much more.
            </p>
            <img src={Skills} className="skills-img" alt="My skils mindmap" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
