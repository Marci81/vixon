import React from "react";
import Card from "../card/card.component";

const ItemsDirectory = ({ cardsSize, isShowAllItems, items, id, title, category}) => {
  return (
    <div className="col">
      <div className="row">
        {isShowAllItems
          ? items.map(({ id, ...otherProps }) => (
              <Card category={category} cardsSize={cardsSize} key={id} id={id} {...otherProps} />
            ))
          : items
              .filter((item, idx) => idx < 4)
              .map(({ id, ...otherProps }) => (
                <Card cardsSize={cardsSize} key={id} {...otherProps} />
              ))}
      </div>
    </div>
  );
};

export default ItemsDirectory;
