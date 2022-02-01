import { COUNTER__INCREASE_COUNTER } from "../../../dictionary";

export default (id) => ({
  type: COUNTER__INCREASE_COUNTER,
  payload: {
    id,
  },
});
