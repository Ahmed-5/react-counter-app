import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
