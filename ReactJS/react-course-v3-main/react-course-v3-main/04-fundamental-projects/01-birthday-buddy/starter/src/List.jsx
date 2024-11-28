import React from "react";
import Image from "./Image";

const List = ({ person }) => {
  return (
    <section>
      <ul>
        <li>
          <Image persons={{ ...person }} />
        </li>
      </ul>
    </section>
  );
};

export default List;
