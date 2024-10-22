function filterEntries(nutrients, condition) {
    const filtered = {};
    for (const [key, value] of Object.entries(nutrients)) {
      if (condition([key, value])) {
        filtered[key] = value;
      }
    }
    return filtered;
  }
  
  function mapEntries(nutrients, condition) {
    const filtered = {};
    for (const [key, value] of Object.entries(nutrients)) {
      filtered[condition([key, value])[0]] = condition([key, value])[1];
    }
    return filtered;
  }
  
  function reduceEntries(nutrients, condition, acc) {
    for (const [key, value] of Object.entries(nutrients)) {
      acc = condition(acc, [key, value]);
    }
    return acc;
  }
  
  function totalCalories(cart) {
    const total = reduceEntries(cart, (acc, [item, grams]) => {
        return acc + (nutritionDB[item].calories * grams / 100);
    }, 0);
    return parseFloat(total.toFixed(1));
}
  
  function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
      return (nutritionDB[item].carbs * grams / 100) < 50;
    });
  }
  
  function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
      const itemNutrition = {};
      for (const [nutrient, value] of Object.entries(nutritionDB[item])) {
        itemNutrition[nutrient] = +(value * grams / 100).toFixed(3);
      }
      return [item, itemNutrition];
    });
  }