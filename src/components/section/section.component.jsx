import React from "react";

import {SectionContainer, SectionImage, SectionText, SectionTextContainer} from "./section.style";

import logo from "../../assets/images/logo/logo.png";



const Section = props => (
  <div id="about">
    <SectionContainer className="mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <SectionImage src={logo} />
        </div>
        <SectionTextContainer className="col-sm-12 col-md-6 col-lg-6">
          <SectionText>
            The Vixon Company established in 2020 by Marton B.F. The company
            sell the newest tech related products. We believe that our customers
            get the best value for their money. Our customer services are out
            standing among other companies. We ship worldwide for Free. Join our
            millions of happy customer and get the life changing experience.
          </SectionText>
        </SectionTextContainer>
      </div>
    </SectionContainer>
  </div>
);

export default Section;
