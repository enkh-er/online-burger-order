export const addIngredients = (ortsNer) => {
  return { type: "ADD_INGREDIENTS", ortsNer };
};
export const removeIngredients = (ortsNer) => {
  return { type: "REMOVE_INGREDIENTS", ortsNer };
};
