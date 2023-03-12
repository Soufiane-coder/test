export const addCoinToUser = (user) => {
  user.coin = +user.coin + 1;
  return { ...user };
};
