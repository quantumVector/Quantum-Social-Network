export const updateObjectInArray = (items, itemId, objPropName, newObjPros) => {
  return items.map(item => {
    if (item[objPropName] === itemId) {
      return { ...item, ...newObjPros }
    };

    return item;
  })
}