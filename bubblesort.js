

function swap (arr, i){
    p = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = p
}

function bubbleSort(arr) {
    let p;
    for (let y = 0; y < arr.length; y++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr,i)
            }
        }

    }
    
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            return false
        }

    }
    return arr;
}

