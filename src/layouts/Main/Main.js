import React from "react";
import PropTypes from "prop-types";
import { Header } from "./components";
import "./Main.css";

const Main = props => {
  const { children } = props;
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
