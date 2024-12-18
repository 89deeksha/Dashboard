import React from "react";
// import girl from "../assets/girl.png";
// import ball from "../assets/ball.png";

function Navbar() {
  return (
    <>
      <div
        className="container-fluid  "
        style={{
          height: "4vw",
          width: "100%",
          marginLeft: "12vw",
        }}
      >
        <button
          type="button"
          className="btn "
          class="btn"
          style={{
            backgroundColor: "#1016B7",
            color: "white",
            width: "15vw",
            marginTop: "6vw",
            borderRadius: "2vw",
            marginLeft: "-8vw",
          }}
        >
          Dashboard
        </button>
      </div>
    </>
  );
}

export default Navbar;
