const moneyFormat = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(value);
};

const totalPayment = (quantity, term) => {
  let total;
  if (quantity < 5000) {
    total = quantity * 1.5;
  } else if (quantity >= 5000 && quantity < 10000) {
    total = quantity * 1.4;
  } else if (quantity >= 10000 && quantity < 15000) {
    total = quantity * 1.3;
  } else {
    total = quantity * 1.2;
  }

  if (term === 6) {
    total *= 1.1;
  } else if (term === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total;
};

export { moneyFormat, totalPayment };
