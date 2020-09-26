import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopAllItems = createSelector(
  [selectShop],
  shop => shop.shopItems
);

export const selectShopItemsToArray = createSelector(
  selectShopAllItems,
  shopItems =>
    shopItems ? Object.keys(shopItems).map(key => shopItems[key]) : []
);

export const selectShopItemsByCategory = category =>
  createSelector(
    [selectShopAllItems],
    items => (items ? items[category] : null)
  );

//TODO remove this one rename the other one selectShopItem2
export const selectShopItem = (category, itemId) =>
  createSelector(
    selectShopAllItems,
    items => items[category].items.find(i => i.id === Number(itemId))
  );

export const selectShopItem2 = itemId =>
  createSelector(
    selectShopItemsToArray,
    shopItems =>
      shopItems
        .map(i => i.items)
        .flat()
        .filter(j => j.id === Number(itemId))
  );

export const selectItemsOrderByPrice = createSelector(
  selectShopItemsToArray,
  shopItems =>
    shopItems
      .map(i => i.items)
      .flat()
      .sort((prev, next) => prev.price - next.price)
);

export const selectItemsByBrand = brandName =>
  createSelector(
    selectShopItemsToArray,
    shopItems =>
      shopItems
        .map(i => i.items)
        .flat()
        .filter(j => j.brand === brandName)
  );

export const selectItemsByOS = osName =>
  createSelector(
    selectShopItemsToArray,
    shopItems =>
      shopItems
        .map(i => i.items)
        .flat()
        .filter(j => j.os === osName)
  );

export const selectItemsByBrandAndOs = name =>
  createSelector(
    [selectItemsByBrand(name), selectItemsByOS(name)],
    (brand, os) => brand.concat(os)
  );
