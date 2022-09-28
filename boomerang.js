const numOfBoomerang = (arr) => {
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 2 ] && arr[i + 1] !== arr[i]) {
        (a.push(arr[i]));
        (a.push(arr[i + 1]));
        (a.push(arr[i + 2]));
        b.push(a);
        a = [];
      }
    }
    let c = b.length;
    return c;
  };
  
  console.log(numOfBoomerang([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
  console.log(numOfBoomerang([9, 5, 9, 5, 1, 1, 1]));
  console.log(numOfBoomerang([5, 6, 6, 7, 6, 3, 9]));
