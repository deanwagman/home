import { LIST__TOGGLE_ITEM_COMPLETE } from "../../dictionary";

export const toggleListItemComplete = ({ listId, itemId }) => {
  return {
    type: LIST__TOGGLE_ITEM_COMPLETE,
    payload: {
      listId,
      itemId,
    },
  };
};
