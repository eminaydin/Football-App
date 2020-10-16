import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import EntryMessage from "./components/EntryMessage";

function App() {
  const [isWeb, setIsWeb] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 925 || window.innerHeight <= 823
        ? setIsWeb(false)
        : setIsWeb(true);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return <Router>{isWeb ? <SideBar /> : <EntryMessage />}</Router>;
}

export default App;
