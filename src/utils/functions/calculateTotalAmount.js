export const calculateTotalAmount = (data) => {
  let totalAmount = {
    perDay: {},
    perCategory: {},
    perCondition: {},
  };

  if (!data) return totalAmount;

  for (let i = 0; i < data.length; i++) {
    const currentItem = data[i];

    if (currentItem.date) {
      totalAmount.perDay[currentItem.date] =
        Number(currentItem["pre-tax amount"]) +
        (Number(currentItem["pre-tax amount"]) || 0);
    }

    if (currentItem.category) {
      totalAmount.perCategory[currentItem.category] =
        Number(currentItem["pre-tax amount"]) +
        (Number(currentItem["pre-tax amount"]) || 0);
    }

    if (currentItem["lot condition"]) {
      totalAmount.perCondition[currentItem["lot condition"]] =
        Number(currentItem["pre-tax amount"]) +
        (Number(currentItem["pre-tax amount"]) || 0);
    }
  }

  return totalAmount;
};
