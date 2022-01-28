import React from "react";
import { connect } from "react-redux";

import { toggleListItemComplete } from "../redux/actions/list";

const List = ({ items, id: listId, toggleItemComplete }) => {
  return (
    <>
      {listId ? <h2>{listId}</h2> : null}
      <ul>
        {items.map(({ id: itemId, isComplete }) => (
          <li key={itemId}>
            <input
              type="checkbox"
              checked={isComplete}
              onChange={() => toggleItemComplete(itemId)}
            />
            <span>{itemId}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

const Lists = ({ lists, toggleListItemComplete }) => {
  return (
    <article>
      {lists.map((list) => {
        return (
          <List
            key={list.id}
            id={list.id}
            items={list.items}
            toggleItemComplete={(itemId) =>
              toggleListItemComplete({
                listId: list.id,
                itemId,
              })
            }
          />
        );
      })}
    </article>
  );
};

const mapStateToProps = ({ lists }) => {
  return {
    lists: Object.entries(lists).map(([key, value]) => {
      return {
        id: key,
        items: value,
      };
    }),
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleListItemComplete: ({ listId, itemId }) =>
    dispatch(toggleListItemComplete({ listId, itemId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
