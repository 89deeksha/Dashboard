// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";

import Sidenav from "./component/Sidenav";
import Banner from "./component/Banner";
import Chat from "./component/Chat";
// import TransactionModal from "./component/Transactionmodel";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="main" id="outer">
        <div className="container-fluid">
          <Navbar></Navbar>
          <Sidenav></Sidenav>
          {/* <Banner></Banner> */}
          <div className="banner-area">
            <Routes>
              <Route path="/" element={<Banner />} />
              <Route path="/chatpage" element={<Chat />} />
              {/* <Route path="/transaction" element={<TransactionModal />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
