import React from "react";
import { connect } from "react-redux";

import increase from "../redux/actions/counters/increase";

const Counters = ({ counters, increase }) => (
  <ul>
    {counters.map(({ id, count }) => (
      <li key={id}>
        {id}:{count}
        <button type="button" onClick={() => increase(id)}>
          +
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = ({ counters }) => ({
  counters: Object.entries(counters).reduce(
    (acc, entry) => [
      ...acc,
      {
        id: entry[0],
        count: entry[1],
      },
    ],
    []
  ),
});

export default connect(mapStateToProps, { increase })(Counters);
