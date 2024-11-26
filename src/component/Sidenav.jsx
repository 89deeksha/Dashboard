import React from "react";
import arrowicon from "../assets/arrowicon.png";
import sidenavgirl from "../assets/sidenavgirl.png";
import card from "../assets/card.png";
import professionals from "../assets/professionals.png";
import start from "../assets/start.png";
function Sidenav() {
  return (
    <div
      className="d-flex flex-column  bg-body-tertiary"
      style={{ height: "90px", width: "5vw", marginTop: "-4vw" }}
    >
      <a
        href="/"
        className="d-block p-3 link-body-emphasis text-decoration-none"
        data-bs-toggle="tooltip"
        data-bs-original-title="Icon-only"
      >
        <img
          src={arrowicon}
          className="bi pe-none"
          width="15"
          height="15"
          style={{ paddingLeft: "7px", maxHeight: "24px" }}
        />
        <use xlink:href="#arrow"></use>

        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link  py-3 "
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="arrow"
          >
            <img
              src={sidenavgirl}
              className="bi pe-none "
              style={{
                objectFit: "cover",
              }}
              width="24"
              height="24"
              role="img"
            />
            <use xlink:href="#girl"></use>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 "
            style={{ objectFit: "cover" }}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="card"
          >
            <img src={card} className="bi pe-none" width="24" height="100" />
            <use xlink:href="#speedometer2"></use>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3  "
            style={{ marginTop: "3vw" }}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="professionals"
            data-bs-original-title="professionals"
          >
            <img
              src={professionals}
              className="bi pe-none "
              width="24"
              height="70"
              role="img"
              aria-label="Orders"
              style={{ maxHeight: "7vw" }}
            />
            <use xlink:href="#table"></use>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 "
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Products"
            data-bs-original-title="Products"
          >
            <img
              src={start}
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Products"
            />
            <use xlink:href="#grid"></use>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
