const renderPrice = (promoPrice, price) => {
  const day = new Date().getUTCDate();
  const hour = new Date().getUTCHours();
  if ((day === 28 && hour >= 2) || (day === 29 && hour < 2)) {
    return promoPrice;
  }
  return price;
};

export default renderPrice;
