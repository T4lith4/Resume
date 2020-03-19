import React from "react";
////import components from react mdl
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
//import components
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import ProLine from "./components/timeline";
import LandingPage from "./components/landingPage";
///import stylesheet
import "./App.css";

/*This component acts as the navigation and footer but it also showcases the rest of my application. */
function App() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Layout className="header-color">
        <Header transparent title="Talitha Kruger" style={{ color: "white" }}>
          <Navigation>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#projects">Projects</a>
            <a href="#timeline">Timeline</a>
          </Navigation>
        </Header>
        <Drawer title="Talitha Kruger">
          <Navigation>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#projects">Projects</a>
            <a href="#timeline">Timeline</a>
          </Navigation>
        </Drawer>
        <Content>
          <LandingPage />
          <About />
          <Contact />
          <Projects />
          <ProLine />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
