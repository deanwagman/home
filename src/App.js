import { connect } from "react-redux";

import Main from "./components/layout/Main";
import Counters from "./components/Counters";
import Lists from "./components/Lists";

import "./App.css";

const App = ({ counters }) => {
  return (
    <Main>
      <Counters />
      <Lists />
    </Main>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(App);
