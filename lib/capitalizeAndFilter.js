const capitalizeAndFilter = (fedArray) => {
  // for(let i = 0; i < fedArray.length; i++){
    
  //   if(fedArray[i].startsWith('f')){
  //     fedArray.splice(i, 1);
  //   } else {
  //     fedArray.splice(i, 1, (fedArray[i].charAt(0).toUpperCase() + fedArray[i].slice(1)));
  //   }

  // }

  const newArray = fedArray.map(arrItem => arrItem.charAt(0).toUpperCase() + arrItem.substr(1));
  
  //return newArray.filter((arrItem) => arrItem[0] !== 'F');
  // Check that the first character of each string doesn't start with 'f'
  return newArray.filter((arrItem) => arrItem.charAt(0) !== 'F');
};

module.exports = {
  capitalizeAndFilter
};
