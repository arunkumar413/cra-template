import React from "react";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header className="app-header">
      <nav>
        <ol>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>{" "}
          </li>
        </ol>
      </nav>
    </header>
  );
}
