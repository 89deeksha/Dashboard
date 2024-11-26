import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./component/navbar";

import Sidenav from "./component/Sidenav";
import Banner from "./component/Banner";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main" id="outer">
      <div className="container-fluid">
        <Navbar></Navbar>

        <Sidenav></Sidenav>
        <Banner></Banner>
      </div>
    </div>
  );
}

export default App;
