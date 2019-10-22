import React, { Component } from "react";
//import components from react mdl
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";

//heading animation
import Zoom from "react-reveal/Zoom";
//import picture icons
import Mongo from "../static/mongodb.png";
import Express from "../static/express.png";
//import icons
import { Icon } from "@iconify/react";
import reduxIcon from "@iconify/icons-simple-icons/redux";
//import stylesheet
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <Grid className="project-grid">
          <Cell col={12}>
            <Zoom>
              {" "}
              <h3 id="projects">Projects</h3>
            </Zoom>

            <hr className="line" />
          </Cell>
          <Cell col={6}>
            <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://docs.google.com/uc?id=13oe08Ho_ML00P0Gb1ztl1fcu7p1VtWy7) top / cover"
                }}
              ></CardTitle>
              <CardText>iTunes Media Search Application</CardText>
              <CardText>
                {" "}
                <i className="fab react fa-react"></i>
                <i className="fab fa-node"></i>
                <i class="fab fa-css3-alt"></i>
                <img className="express-icon" alt="express js" src={Express} />
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://shielded-woodland-75660.herokuapp.com/">
                    View Live Demo
                  </a>{" "}
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}></CardMenu>
            </Card>
          </Cell>

          <Cell col={6}>
            <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://docs.google.com/uc?id=1CL9bpdzJxKBgcSM4U6j9X9aZVVW7nhaD) top / cover"
                }}
              ></CardTitle>
              <CardText>Memory Card Matching Game</CardText>
              <CardText>
                {" "}
                <i className="fab react fa-react"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js"></i>
              </CardText>
              <CardActions border>
                <Button colored>
                  {" "}
                  <a href="https://vast-thicket-75136.herokuapp.com/">
                    View Live Demo{" "}
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}></CardMenu>
            </Card>
          </Cell>

          <Cell col={6}>
            <Card
              shadow={0}
              style={{ width: "512px", margin: "auto", marginTop: "50px" }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://docs.google.com/uc?id=1p42In8OjuIofkLgc460__oReIvVYK8TC) top / cover"
                }}
              ></CardTitle>
              <CardText>Fictitious Company Website - "Can's Addict"</CardText>
              <CardText>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-html5"></i>
                <i class="fab fa-js"></i>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://whispering-sierra-08171.herokuapp.com/products.html">
                    View Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}></CardMenu>
            </Card>
          </Cell>
          <Cell col={6}>
            <Card
              shadow={0}
              style={{
                width: "512px",
                margin: "auto",
                marginTop: "50px",
                marginBottom: "50px"
              }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://docs.google.com/uc?id=1zvftyqe_bIQi0hhTAac2J0Z7043weitx) top / cover"
                }}
              ></CardTitle>
              <CardText>
                DreamCatcher - An application for recording dreams.
              </CardText>
              <CardText>
                {" "}
                <i className="fab react fa-react"></i>{" "}
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-node"></i>
                <img className="mongo-icon" alt="mongo db" src={Mongo} />
                <img className="express-icon" alt="express js" src={Express} />
                <Icon className="icon" icon={reduxIcon} />
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://peaceful-bastion-44849.herokuapp.com/">
                    View Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}></CardMenu>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
