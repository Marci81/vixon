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

//TODO remove this one rename the other one selectShopItem2
export const selectShopItem = (category, itemId) =>
  createSelector(
    selectShopAllItems,
    items => items[category].items.find(i => i.id === Number(itemId))
  );

export const selectShopItem2 = itemId =>
  createSelector(
    selectShopAllItems,
    shopItems =>
      Object.keys(shopItems)
        .map(key => shopItems[key])
        .map(i => i.items)
        .flat()
        .filter(j => j.id === Number(itemId))
  );

export const selectItemsOrderByPrice = createSelector(
  selectShopAllItems,
  shopItems =>
    Object.keys(shopItems)
      .map(key => shopItems[key])
      .map(i => i.items)
      .flat()
      .sort((prev, next) => prev.price - next.price)
);

export const selectItemsByBrand = brandName =>
  createSelector(
    selectShopAllItems,
    shopItems =>
      Object.keys(shopItems)
        .map(key => shopItems[key])
        .map(i => i.items)
        .flat()
        .filter(j => j.brand === brandName)
  );

export const selectItemsByOS = osName =>
  createSelector(
    selectShopAllItems,
    shopItems =>
      Object.keys(shopItems)
        .map(key => shopItems[key])
        .map(i => i.items)
        .flat()
        .filter(j => j.os === osName)
  );

export const selectItemsByBrandAndOs = name =>
  createSelector(
    [selectItemsByBrand(name), selectItemsByOS(name)],
    (brand, os) => brand.concat(os)
  );
