import React from "react";
import { FooterContainer, FooterText } from "./footer.style";
import Alert from "../alert/alert.component";

const Footer = props => (
  <div>
    <FooterContainer>
      <FooterText className="text-center FooterText">Vixon 2020</FooterText>
    </FooterContainer>
    <Alert />
  </div>
);

export default Footer;
