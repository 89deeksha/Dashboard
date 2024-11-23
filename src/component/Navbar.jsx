import React from "react";
import girl from "../assets/girl.png";
import ball from "../assets/ball.png";
function Navbar() {
  return (
    <>
      <div
        className="container-fluid  border-dark"
        style={{
          height: "4vw",
          width: "100vw",
          marginLeft: "5vw",
        }}
      >
        <div className="row d-flex flex-row">
          <div
            className="col-sm-2  d-flex "
            style={{
              height: "5vw",
              width: "10vw",
            }}
          >
            {/* <a className="navbar-brand" href="#"></a> */}

            <img
              src={girl}
              alt="girl"
              className="h-80 w-80 object-fit-cover"
              style={{
                maxHeight: "4vw",
              }}
            />
            <img
              src={ball}
              alt="ball"
              className="h-80 w-80 object-fit-cover pt-3"
              style={{
                maxHeight: "2vw",
              }}
            />
            <h4
              className="h-30 w-50 pt-4"
              style={{
                fontSize: "10px",
                fontWeight: "bolder",
              }}
            >
              ATHLETE'S ACADEMY
            </h4>
          </div>
          <div
            className="col-sm-10 bg-light pt-2"
            style={{
              height: "5vw",
            }}
          >
            {/* <div className="margin mx-5"> */}
            <div
              className="row "
              style={{
                height: "3vw",
                width: "30vw",
                marginLeft: "30vw",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="col-sm-4   py-2 px-4 fs-6  "
                style={{
                  height: "3vw",
                  width: "7vw",
                  fontWeight: "500",
                }}
              >
                Home
              </div>
              <div
                className="col-sm-4  py-2 px-4 "
                style={{
                  height: "3vw",
                  width: "6vw",
                  fontWeight: "500",
                }}
              >
                Blogs
              </div>
              <div
                className="col-sm-4  py-2 px-4"
                style={{
                  height: "3vw",
                  width: "6vw",
                  fontWeight: "500",
                }}
              >
                Wallet
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn  "
          style={{
            backgroundColor: "#1016B7",
            color: "white",
            width: "15vw",
            marginTop: "1vw",
            borderRadius: "2vw",
          }}
        >
          Dashboard
        </button>
      </div>
    </>
  );
}

export default Navbar;
