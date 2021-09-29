/** @jsxRuntime classic /
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import { css, jsx } from "@emotion/react";
import logo from "./logo.png";

/* const headerStyle = css`
  display: flex;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  padding: 20px 10%;
  background: transparent;
  background-color: rgba(0, 0, 0, 0.6);
`;

const linkStyle = css`
  li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    padding: 0px 20px;
  }

  a {
    color: #ffffff;
  }

  img & {

    cursor: pointer;
  max-width: 10%;
  height: auto;
  display: inline-block;
  }
`;


const nav__links = css`
  li,
  a,
  button {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
  }



   li {

    display: inline-block;
    padding: 0px 20px;
}


 li :hover {
    color: rgba(0, 136, 169, 1);
}

li a {
    transition: all 0.3s ease 0s;
    color: white;
}

button {
    cursor:pointer;
    padding: 15% 20% ;
    background-color: rgba(0, 136, 169, 1);
    border: none;
    border-radius: 10px;
    color: white;
    }
    
button :hover {
    background-color: rgba(0, 15, 19, 1);
    color: #ffffff;
}

`; */

class Nav extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Nav;
