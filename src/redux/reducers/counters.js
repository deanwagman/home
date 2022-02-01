import { COUNTER__INCREASE_COUNTER } from "../../dictionary";
const initialState = {
  DEV: 0,
  "Practice Spanish": 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const { id } = payload || {};

  switch (action.type) {
    case COUNTER__INCREASE_COUNTER:
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
      };
  }

  return state;
};
