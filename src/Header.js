/** @jsxRuntime classic /
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import { css, jsx } from "@emotion/react";
import unsplahgood2 from './unsplahgood2.jpg';
import logo from './logo.png';
const headerStyle = css`
    display: flex;
    background-image: url(${unsplahgood2});
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    color: #ffffff;
`;

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header css={headerStyle}>
     {/*      <img src= {logo} alt="logo" /> */}
          <nav>
            <ul>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Princing</a>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
