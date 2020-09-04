const copyAndPush = (fedArray, fedItem) => {
  const newArray = fedArray.slice();
  newArray.push(fedItem);
  
  // Apparently, I *CANNOT* do this in one line.
  // const newArray = fedArray.slice().push(fedItem) returns the total number
  // of items in the array, NOT the array itself. Huh, who knew.

  return newArray;
};

module.exports = {
  copyAndPush
};
