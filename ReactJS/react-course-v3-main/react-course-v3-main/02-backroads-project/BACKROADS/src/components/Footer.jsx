import React from "react";
import PageLinks from "./PageLinks";
import { socialLinks } from "../data";

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks links="footer-links" aLink="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className="footer-icon"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
