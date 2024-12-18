import React, { useState } from "react";
import arrowicon from "../assets/arrowicon.png";

import { IoMdHome } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { BsFolderFill } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";

import professionals from "../assets/professionals.png";
import start from "../assets/start.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import sidenavgirl from "../assets/sidenavgirl.png";
import { AiOutlineHome } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { BsFolder } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import chatgirlone from "../assets/chatgirlone.png";
import chatboyone from "../assets/chatboyone.png";
import chatmen from "../assets/chatmen.png";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

import "./sidenav.css";
function Sidenav() {
  const [showform, setshowform] = useState(false);
  // console.log(showform);

  const handleprofile = () => {
    setshowform(true);
  };

  const handlecancel = () => {
    setshowform(false);
  };
  return (
    <div
      className="d-flex flex-column  "
      id="sidenav"
      style={{ height: "90px", width: "5vw" }}
    >
      <div onClick={handleprofile}></div>
      {showform === false ? (
        <>
          <div>
            <div onClick={handleprofile}>
              <img
                src={arrowicon}
                className="bi pe-none"
                width="15"
                height="10"
                style={{ paddingLeft: "7px", maxHeight: "24px" }}
              />
            </div>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li className="nav-item">
                <div
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
                </div>
              </li>
              <li>
                <div
                  className="nav-link py-3 "
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="card"
                >
                  <div>
                    <IoMdHome
                      size={24}
                      color="black"
                      style={{ marginTop: "2vw" }}
                    />
                    <IoBarChartSharp
                      size={24}
                      color="black"
                      style={{ marginTop: "1vw" }}
                    />
                    <BsFolderFill
                      size={24}
                      color="black"
                      style={{ marginTop: "1vw" }}
                    />
                    <GoStarFill
                      size={24}
                      color="black"
                      style={{ marginTop: "1vw" }}
                    />
                    <IoWalletOutline
                      size={24}
                      color="black"
                      style={{ marginTop: "1vw" }}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div
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
                </div>
              </li>
              <li>
                <div
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
                </div>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className=" flex-shrink-0 " id="menu_1">
            <div className="d-flex align-items-center link-body-emphasis text-decoration-none">
              <svg className="bi pe-none me-2" width="40" height="32"></svg>
              <div id="leftarrow" className="ms-n3 d-flex">
                <MdOutlineKeyboardArrowLeft onClick={handlecancel} />
                <p id="menu-title">Menu</p>
              </div>
            </div>
            <div>
              <img
                src={sidenavgirl}
                alt="sidenavgirl"
                id="sidenavgirlmenu"
                className="rounded-circle me-2 d-flex"
              />
              <p id="profile">Profile</p>
            </div>
            <div
              className="nav-link  "
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="card"
            >
              <div className="d-flex flex-column" id="leftmenuicon">
                <AiOutlineHome />
                <IoBarChartOutline />
                <BsFolder />
                <FaRegStar />
                <IoWalletOutline />
              </div>
              <div>
                <p id="chathistory">Chat history</p>
                <div className="d-flex flex-row">
                  <img
                    src={chatgirlone}
                    alt="chatgirlone"
                    id="chatgirlone"
                    className="rounded-circle me-2 d-flex"
                  />
                  <p id="n-1">Karthryn murphy</p>
                </div>
              </div>
              <div className="d-flex flex-row">
                <img
                  src={chatboyone}
                  alt="chatboyone"
                  id="chatboyone"
                  className="rounded-circle me-2 d-flex"
                />
                <p id="n-2">Janee kuperr</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <img
                src={chatmen}
                alt="chatmen"
                id="chatmen"
                className="rounded-circle me-2 d-flex"
              />
              <p id="n-3">Albert flores</p>
            </div>

            {/* <link to="/chatpage"> Chats </link> */}
            {/* <Link to="/chatpage">chats</Link> */}
            <Link
              to="/chatpage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <button className="dropdown-toggle" id="btn">
                Chat
              </button>
            </Link>
            <div className="d-flex flex-row">
              <img
                src={start}
                alt="start-1"
                id="start"
                className="rounded-circle me-2 d-flex"
              />
              <p id="logout">Log out</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidenav;
