import React from "react";
import Card from "../card/card.component";

const ItemsDirectory = ({ cardsSize, isShowAllItems, items, category}) => {
  return (
    <div className="col">
      <div className="row">
        {isShowAllItems
          ? items.map((item) => (
              <Card category={category} cardsSize={cardsSize} key={item.id} item={item}  />
            ))
          : items
              .filter((item, idx) => idx < 4)
              .map((item) => (
                <Card cardsSize={cardsSize}  key={item.id} item={item} />
              ))}
      </div>
    </div>
  );
};

export default ItemsDirectory;
