import { LIST__TOGGLE_ITEM_COMPLETE } from "../../dictionary";

const initialState = {
  "House Chore": [
    {
      id: "Put up Micky shelves",
      isComplete: false,
    },
    {
      id: "Groom clothing",
      isComplete: false,
    },
    {
      id: "Sweep patio",
      isComplete: false,
    },
  ],
  "Things to try": [
    {
      id: "Making cheesecake",
      isComplete: false,
    },
    {
      id: "Making pickles",
      isComplete: false,
    },
  ],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const { listId, itemId } = payload || {};

  switch (type) {
    case LIST__TOGGLE_ITEM_COMPLETE:
      return {
        ...state,
        [listId]: state[listId].reduce(
          (list, item) => [
            ...list,
            {
              id: item.id,
              isComplete:
                item.id === itemId ? !item.isComplete : item.isComplete,
            },
          ],
          []
        ),
      };
    default:
      return state;
  }
};
