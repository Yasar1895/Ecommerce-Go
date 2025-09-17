export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const getDiscountPrice = (price, discount) => {
  return price - price * (discount / 100);
};
