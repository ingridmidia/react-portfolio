import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/App.css";


function App() {
  return (
    <>
      <Header />
      <main className="container" id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
