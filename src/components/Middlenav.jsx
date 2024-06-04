import React from "react";
import { Tooltip } from "./Tooltip";
import logo from "../assets/logo.png";
export const Middlenav = () => {
  return (
    <div className="Middle pt-2 pb-2">
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link fs-5 fw-bolder text-danger"
            aria-current="page"
            href="#"
          >
            Bakers Delight
          </a>
        </li>
        <Tooltip></Tooltip>
      </ul>
    </div>
  );
};
