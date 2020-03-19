import React from "react";
import { Footer, FooterLinkList, FooterSection } from "react-mdl";

function FooteR() {
  return (
    <div>
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
    </div>
  );
}

export default FooteR;
