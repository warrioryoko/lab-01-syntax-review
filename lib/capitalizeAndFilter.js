const capitalizeAndFilter = (fedArray) => {
  for(let i = 0; i < fedArray.length; i++){
    
    if(fedArray[i].startsWith('f')){
      fedArray.splice(i, 1);
    } else {
      fedArray.splice(i, 1, (fedArray[i].charAt(0).toUpperCase() + fedArray[i].slice(1)));
    }

  }
  
  return fedArray;
};

module.exports = {
  capitalizeAndFilter
};
