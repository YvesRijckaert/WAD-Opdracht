import React from "react";
import { Link } from "react-router-dom";

const AdminWork = () => {
  return (
    <div className="beheer-links">
      <Link className="link" to="/edit">
        Verander werkplaats
      </Link>
      <br />
      <Link className="link" to="/add">
        Voeg werkplaats toe
      </Link>
    </div>
  );
};

export default AdminWork;
