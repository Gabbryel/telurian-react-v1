const renderPrice = (promoPrice, price) => {
  const day = new Date().getUTCDate();
  const hour = new Date().getUTCHours();
  if ((day === 27 && hour >= 22) || (day === 28 && hour < 22)) {
    return promoPrice;
  }
  return price;
};

export default renderPrice;
