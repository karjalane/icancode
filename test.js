const priceCalculate = (adult, child, baby, adultPrice, childPrice, babyPrice) => {
  const total = adult + child + baby

  const adultTotalPrice = adult * adultPrice
  const childTotalPrice = child * childPrice
  const babyTotalPrice = baby * babyPrice

  const totalPrice = adultTotalPrice + childTotalPrice + babyTotalPrice

  if (total > 5) {
    return baby > 1
      ? totalPrice - (babyPrice / 2)
      : child > 1
        ? totalPrice - (childPrice / 2)
        : totalPrice - (adultPrice / 2)
  }

  return totalPrice
}