import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./component/navbar";
import Banner from "./component/Banner";
import Sidenav from "./component/Sidenav";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main" id="outer">
      <div className="container-fluid">
        <Navbar></Navbar>
        {/* <Banner></Banner> */}
        <Sidenav></Sidenav>
      </div>
    </div>
  );
}

export default App;
