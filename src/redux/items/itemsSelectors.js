export const selectItems = (state) => state.items.entities;

export const selectItemsStatusGet = (state) => state.items.statuses.get;
export const selectItemsStatusAdd = (state) => state.items.statuses.add;
export const selectItemsStatusRemove = (state) => state.items.statuses.remove;

export const selectItemsError = (state) => state.items.errors;

export const selectItemsErrorGet = (state) => state.items.errors.get;
export const selectItemsErrorAdd = (state) => state.items.errors.add;
export const selectItemsErrorRemove = (state) => state.items.errors.remove;
