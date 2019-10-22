import React from "react";
////import components from react mdl
import {
  Layout,
  Header,
  Drawer,
  Navigation,
  Content,
  Footer,
  FooterLinkList,
  FooterSection
} from "react-mdl";
//import components
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import ProLine from "./components/timeline";
import LandingPage from './components/landingPage';
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
          <LandingPage/>
          <About/>
          <Contact />
          <Projects />
          <ProLine />
         
        </Content>
        <Footer size="mini">
          <FooterSection type="left" logo="Talitha Kruger">
            <FooterLinkList>
              <a href="https://github.com/T4lith4/">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/talitha-kruger-3a7b07175/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="mailto:talkruger9@gmail.com?Subject=Dear%20Talitha"
                target="_top"
                className="icon-link"
              >
                <i className="far fa-envelope"></i>
              </a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;

