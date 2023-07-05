function cleanSet(set, startString) {
  const cleanedValues = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  });

  return cleanedValues.join('-');
}

export default cleanSet;
