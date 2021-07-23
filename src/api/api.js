const saveFavorite = (favorite) => {
  window.localStorage.setItem("favorite", favorite);
};

const getFavorite = () => {
  return window.localStorage.getItem("favorite");
};

export { getFavorite, saveFavorite };
