import { connect } from "react-redux";

import Main from "./components/layout/Main";
import Counter from "./components/Counter";
import Lists from "./components/Lists";

import "./App.css";

const App = ({ value }) => {
  return (
    <Main>
      <Counter />
      <Lists />
    </Main>
  );
};

const mapStateToProps = (state) => ({
  value: state.test,
});

export default connect(mapStateToProps, null)(App);
