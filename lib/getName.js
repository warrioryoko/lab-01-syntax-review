const getName = fedObject => {
  const { name } = fedObject;

  return name;
};

// Use destructuring to pull a name property we expect to live on the object

module.exports = {
  getName
};
