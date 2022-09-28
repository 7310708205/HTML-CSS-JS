function mergeArrayRemoveDup(array1, array2){

    let array = [...array1, ...array2];

    let arrayWithNoDup = [...new Set(array)];

    console.log(arrayWithNoDup.sort())
}

const array1 = [1, 2, 3]
const array2 = [3, 6, 5]

mergeArrayRemoveDup(array1, array2)