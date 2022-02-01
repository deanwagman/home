import { connect } from "react-redux";

import Main from "./components/layout/Main";
import Heading from "./components/Heading";
import Counters from "./components/Counters";
import Lists from "./components/Lists";

import "./App.css";

const App = ({ counters }) => {
  return (
    <Main>
      <Heading />
      <Counters />
      <Lists />
    </Main>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(App);
