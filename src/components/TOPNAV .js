import React from "react";

export const TOPNAV = () => {
  return (
    <div className="wrapper ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-danger ">
          <div className="  ms-auto " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  DOUGH GETTERS LOGIN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  COMPARE
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-dark" href="#">
                  FAVOURITES
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
