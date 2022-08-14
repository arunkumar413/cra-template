import React from "react";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="left-side-bar">
      <nav>
        <span>
          <Link to="/"> Home</Link>
        </span>
        <span>
          <Link to="/about"> About</Link>
        </span>
        <span>
          <Link to="/contact"> Contact</Link>{" "}
        </span>
      </nav>
    </aside>
  );
}
