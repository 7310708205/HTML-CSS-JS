const isArrayNested = (array1, array2) => {
    if(Math.min(...array1) > Math.min(...array2) && Math.max(...array1) < Math.max(...array2)) {
        return true;
    } 
    else 
        return false;
  };
  
  console.log(isArrayNested([1, 2, 3, 4], [0, 8, 3]));
  console.log(isArrayNested([2, 3], [5, 6, 7]));
 