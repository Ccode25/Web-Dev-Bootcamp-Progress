import React from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import "@fortawesome/fontawesome-free/css/all.min.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks links="nav-links" id="nav-links" aLink="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
