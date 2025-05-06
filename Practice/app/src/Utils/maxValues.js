function maxValues(obj) {
  const arrMax = obj.map((item) =>
    item.values.reduce((acc, currentValue) => acc + currentValue, 0)
  );

  const maxIndex = arrMax.indexOf(Math.max(...arrMax));

  return obj[maxIndex];
}

export default maxValues;
