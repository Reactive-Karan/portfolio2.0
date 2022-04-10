import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
