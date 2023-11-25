import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/App.css";


function App() {
  return (
    <div id="page-container">
      <Header />
      <main className="container" id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
