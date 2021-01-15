


function mergeSort(array, fn = (a,b) => a-b) { 
    array = split(array); 
    let arr1 = array[0] , arr2 = array[1];
    if (arr1.length > 1) arr1 = mergeSort(arr1, fn); 
    if (arr2.length > 1) arr2 = mergeSort(arr2, fn);

    array = merge(arr1, arr2, fn);
    
    return array;  
}


function split(wholeArray) {
    let firstHalf = [];
    if (wholeArray.length % 2 == 0) {
        mitad = parseInt(wholeArray.length / 2)
    } else {
        mitad = parseInt(wholeArray.length / 2 + 1)
    }

    for (let i = 0; i < mitad; i++) {
        firstHalf[i] = wholeArray.shift()
    }
    let secondHalf = wholeArray
    return [firstHalf, secondHalf];
}


function merge(arr1, arr2) {
    var i1 = 0;
    var i2 = 0;
    var mergedArr = [];
    while (i1 < arr1.length || i2 < arr2.length) {
        if (arr1[i1] < arr2[i2] || !arr2[i2]) {
            mergedArr.push(arr1[i1]);
            i1++;
        } else {
            mergedArr.push(arr2[i2]);
            i2++;
        }
    }
    return mergedArr;
}


