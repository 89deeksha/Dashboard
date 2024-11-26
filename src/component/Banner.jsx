import React from "react";
import Cardwomen from "../assets/Cardwomen.png";

function Banner() {
  return (
    <div
      className="d-flex flex-row "
      style={{
        height: "2vw",
        width: "46vw",

        marginTop: "-1vw",

        position: "absolute",
      }}
    >
      <div
        className="d-flex flex-row "
        style={{
          height: "3vw",
          width: "88vw",
          marginLeft: "4vw",
          marginTop: "2vw",
          gap: "30vw",
        }}
      >
        <div>
          <div
            className="card mt-3 "
            style={{
              Width: "15vw",
              height: "9vw",
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={Cardwomen}
                  className="img rounded"
                  style={{
                    Width: "100%",
                    height: "7vw",
                    objectFit: "cover",
                    border: "1px grey solid",
                    marginTop: "1vw",
                    marginLeft: "2vw",
                  }}
                  alt="cardwomen"
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title" style={{ marginLeft: "2vw" }}>
                    Gayathri harun taj
                  </h5>
                  <p
                    className="card-text d-flex,flex-row"
                    style={{ marginLeft: "2vw" }}
                  >
                    <p>
                      4.0
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "gold", marginRight: "0.5vw" }}
                      ></i>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "gold", marginRight: "0.5vw" }}
                      ></i>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "gold", marginRight: "0.5vw" }}
                      ></i>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "gold", marginRight: "0.5vw" }}
                      ></i>
                      <i className="bi bi-star"></i>
                    </p>
                  </p>
                  <h5
                    className="card-text"
                    style={{ marginTop: "-1vw", marginLeft: "2vw" }}
                  >
                    Tennis coach
                  </h5>
                  {/* <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p> */}
                </div>
              </div>
            </div>
          </div>
          {/* Upcoming Session */}
          <div
            className="card mt-2 mb-1 bg-white"
            style={{ height: "12vw", maxwidth: "17rem" }}
          >
            <div className="d-flex">
              <div
                className="mt-1"
                style={{ fontWeight: "bold", marginLeft: "1vw" }}
              >
                Upcoming session
              </div>
              <p
                className="mt-2"
                style={{ fontSize: "0.7vw", marginLeft: "9vw" }}
              >
                See all schedule page
              </p>
            </div>

            <div
              className="card-body"
              style={{
                backgroundColor: "#11146D",
                borderRadius: "1vw",
                height: "6vw",
                width: "27vw",

                marginBottom: "0.5vw",
                marginLeft: "1vw",
              }}
            >
              <p className="card-text" style={{ color: "white" }}>
                Join your teaching session 03-09-2021 at
                <p
                  className="card-text"
                  style={{ textAlign: "center", marginBottom: "0.2vw" }}
                >
                  11.00 Am Asia
                </p>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-3"
                      style={{
                        textAlign: "center",
                        marginBottom: "0.2vw",
                        fontSize: "1vw",
                      }}
                    >
                      02 <br /> days
                    </div>
                    <div
                      className="col-3"
                      style={{
                        textAlign: "center",
                        marginBottom: "0.2vw",
                        fontSize: "1vw",
                      }}
                    >
                      48
                      <br /> hours
                    </div>
                    <div
                      className="col-3"
                      style={{
                        textAlign: "center",
                        marginBottom: "0.2vw",
                        fontSize: "1vw",
                      }}
                    >
                      10 minutes
                    </div>
                    <div
                      className="col-3"
                      style={{
                        textAlign: "center",
                        marginBottom: "0.2vw",
                        fontSize: "1vw",
                      }}
                    >
                      30 seconds
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <blockquote
                className="blockquote  d-flez "
                style={{ marginTop: "1vw" }}
              >
                <p
                  className=" fs-6"
                  style={{
                    height: "5vw",
                    color: "#2634AC",
                    marginTop: "-1vw",
                    fontWeight: "600",
                  }}
                >
                  Your coaching session has ended, please select from the option
                  below:
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "black" }}
                      for="exampleRadios1"
                    >
                      I attend the session
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "black" }}
                      for="exampleRadios2"
                    >
                      i wasn't able to attend submit
                    </label>
                  </div>
                  <br />
                </p>
              </blockquote>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "23rem", marginTop: "1vw" }}
          >
            <div
              className="card-title mt-2"
              style={{ fontWeight: "700", marginLeft: "2vw" }}
            >
              Settings
            </div>

            <i className="bi bi-lock d-flex mt-2" style={{ marginLeft: "1vw" }}>
              <p className="" style={{ marginLeft: "1vw" }}>
                Password
              </p>
            </i>
            <i className="bi bi-envelope d-flex" style={{ marginLeft: "1vw" }}>
              <p className="" style={{ marginLeft: "1vw" }}>
                EmailID
              </p>
            </i>

            <i className="bi bi-paypal d-flex" style={{ marginLeft: "1vw" }}>
              <p className="" style={{ marginLeft: "1vw" }}>
                paypal
              </p>
            </i>
            <i className="bi bi-trash d-flex" style={{ marginLeft: "1vw" }}>
              <p className="" style={{ marginLeft: "1vw" }}>
                Delete
              </p>
            </i>
          </div>
        </div>
      </div>
      {/* center */}
      <div className="">
        <div
          className="card"
          style={{
            height: "325px",
            width: "38vw",
            marginTop: "3.3vw",
            marginLeft: "1vw",
          }}
        >
          <div className="">
            <h5
              className="card-title d-flex"
              style={{
                marginLeft: "2vw",
                fontWeight: "700",
                marginTop: "1vw",
              }}
            >
              Transaction history
              <p
                className=""
                style={{
                  marginLeft: "8vw",
                  fontSize: "1vw",
                  color: "grey",
                  textDecorationLine: "underline",
                }}
              >
                See transaction page
              </p>
            </h5>

            <div
              className="card-body"
              style={{
                backgroundColor: "#11146D",
                borderRadius: "1vw",
                height: "21vw",
                width: "35vw",

                marginBottom: "1vw",
                marginLeft: "1vw",
              }}
            >
              <p
                className="card-text d-flex"
                style={{ color: "white", borderBottom: "1px solid grey" }}
              >
                <h5>Transaction</h5>
                <h5
                  className=""
                  style={{
                    marginLeft: "17vw",
                    fontSize: "1.5vw",
                    marginTop: "0.4vw",
                    textDecorationLine: "underline",
                  }}
                >
                  See All
                </h5>
              </p>
              <div
                className="d-flex justify-content-between "
                style={{
                  color: "white",

                  padding: "5px",
                  gap: "1vw",
                }}
              >
                <div>
                  <i
                    className="bi bi-wallet2 "
                    style={{
                      color: "white",
                      marginRight: "4vw",
                      padding: "5px",
                    }}
                  >
                    Received from Riya
                  </i>
                  <br />
                  <small
                    className="text-white"
                    style={{
                      fontSize: "0.8vw",
                      marginLeft: "2vw",
                    }}
                  >
                    17.03.2023, 10:00 AM
                  </small>
                  <br />
                </div>

                <span className="text-warning font-weight-bold">+ $600</span>
              </div>
              {/* second */}
              <div
                className="d-flex justify-content-between "
                style={{
                  color: "white",

                  padding: "5px",
                  gap: "1vw",
                }}
              >
                <div>
                  <i
                    className="bi bi-wallet2 "
                    style={{
                      color: "white",
                      marginRight: "4vw",
                      padding: "5px",
                    }}
                  >
                    Received from Anu
                  </i>
                  <br />
                  <small
                    className="text-white"
                    style={{
                      fontSize: "0.8vw",
                      marginLeft: "2vw",
                    }}
                  >
                    20.03.2023, 10:00 AM
                  </small>
                  <br />
                </div>

                <span className="text-warning font-weight-bold">+ $200</span>
              </div>
              {/* third*/}
              <div
                className="d-flex justify-content-between "
                style={{
                  color: "white",

                  padding: "5px",
                  gap: "1vw",
                }}
              >
                <div>
                  <i
                    className="bi bi-wallet2 "
                    style={{
                      color: "white",
                      marginRight: "4vw",
                      padding: "5px",
                    }}
                  >
                    Received from Kira
                  </i>
                  <br />
                  <small
                    className="text-white"
                    style={{
                      fontSize: "0.8vw",
                      marginLeft: "2vw",
                    }}
                  >
                    21.03.2023, 10:00 AM
                  </small>
                  <br />
                </div>

                <span className="text-warning font-weight-bold">+ $30</span>
              </div>
            </div>
            <br />
          </div>
        </div>
        <canvas
          className="my-4 w-100
            id=myChart"
          style={{
            display: "block",
            boxsizing: "border-box",
            height: "80px",
            width: "190px",
          }}
        ></canvas>
      </div>
      <div>right</div>
    </div>
  );
}

export default Banner;
