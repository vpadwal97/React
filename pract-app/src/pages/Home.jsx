// App.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Scrollbars from "../components/Scrollbars";
import CursorCustomS from "./CursorCustomS";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <CursorCustomS /> */}
      <Header /> <Aside />
      <Scrollbars />
      <Footer />
    </>
  );
};

export default Home;
