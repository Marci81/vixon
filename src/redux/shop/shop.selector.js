import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopAllItems = createSelector(
  [selectShop],
  shop => shop.shopItems
);

export const selectShopItemsByCategory = category =>
  createSelector(
    [selectShopAllItems],
    items => items[category]
  );

export const selectShopItem = (category, itemId) =>
  createSelector(
    selectShopAllItems,
    items => items[category].items.find(i => i.id === Number(itemId))
  );

export const selectShopItemsId = createSelector(
  selectShopAllItems,
  items =>
    Object.keys(items)
      .map(key => items[key])
      .map(i => i.items)
      .flat()
      .map(i => i.id)
);
