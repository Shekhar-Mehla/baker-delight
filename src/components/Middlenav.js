import React from "react";
import logo from "../assets/logo.png";
export const Middlenav = () => {
  return (
    <div className="Middle">
      <ul class="nav">
        <li class="nav-item">
          <a
            class="nav-link fs-5 fw-bolder text-danger"
            aria-current="page"
            href="#"
          >
            Bakers Delight
          </a>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="This top tooltip is themed via CSS variables."
          >
            Custom tooltip
          </button>
        </li>
      </ul>
      
    </div>
  );
};
