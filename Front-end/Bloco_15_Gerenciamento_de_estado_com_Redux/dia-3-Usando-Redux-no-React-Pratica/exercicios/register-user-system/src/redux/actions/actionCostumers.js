const manageCostumers = (typeAction, costumerInfo) => ({    
  type: typeAction,
  costumer: { ...costumerInfo },
});

export default manageCostumers