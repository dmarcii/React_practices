/** @jsxRuntime classic /
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import { css, jsx } from "@emotion/react";
import './Section_1.css';
import logo from "./logo.png";
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
        <section className = 'Section_1'>
        <header >
        <img src={logo} alt="logo" />
        <ul className="nav-links">
          <li >
            <a href="">Services</a>
          </li>
          <li>
            <a  href="">About</a>
          </li>
          <li>
            <a href="">Princing</a>
          </li>
          <li> 
            <button className = "btn">Contact</button>
          </li>
        </ul>
      </header>
        </section>
      </React.Fragment>
    );
  }
}
export default Section_1;
