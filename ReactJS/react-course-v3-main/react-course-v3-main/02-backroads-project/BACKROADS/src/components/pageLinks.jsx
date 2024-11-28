import React from "react";
import { pageLinks } from "../data";

function PageLinks(props) {
  return (
    <div>
      <ul className={props.links} id={props.id}>
        {pageLinks.map((pageLink) => (
          <li key={pageLink.id}>
            <a href={pageLink.href} className={props.aLink}>
              {pageLink.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageLinks;
