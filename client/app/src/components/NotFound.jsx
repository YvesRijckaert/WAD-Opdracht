import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <h2>
        404 not found
        <span aria-label="sad" role="img">
          😞
        </span>
      </h2>
      <Link className="bttn" to="/">
        Go back home!
      </Link>
    </section>
  );
};

export default NotFound;
