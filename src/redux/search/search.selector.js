import { createSelector } from "reselect";
import { selectShopAllItems } from "../shop/shop.selector";

const selectSearch = state => state.search;

export const selectIsHidden = createSelector(
  selectSearch,
  search => search.isHidden
);

export const selectItemsToTheSearch = createSelector(
  selectShopAllItems,
  shopItems => shopItems ?
    Object.keys(shopItems)
      .map(key => shopItems[key])
      .map(i => i.items)
      .flat() : []
);
