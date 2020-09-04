const copyAndPush = (fedArray, fedItem) => {
  const newArray = [...fedArray, fedItem];

  return newArray;
};

module.exports = {
  copyAndPush
};
