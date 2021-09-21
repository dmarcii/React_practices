/** @jsxRuntime classic /
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import { css, jsx } from "@emotion/react";
import unsplahgood2 from './unsplahgood2.jpg';
import Nav from './Nav'

/* const sectionStyle = css`
    background-image: url(${unsplahgood2});
    min-height: 100vh;
    background-position: center;
    background-size: cover;
`; */

class Section_1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
         <Nav/> 
        </section>
      </React.Fragment>
    );
  }
}
export default Section_1;
