
function generateRandomArray(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
}

const arr = generateRandomArray(5)
console.log(arr);

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr) {
    let noSwap;
    for (let i = 0; i < arr.length; i++) {
        noSwap = true;
        for(let j = 0; j < arr.length -i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                noSwap = false;
            } 
        }

        if (noSwap) break;
    }
}

bubbleSort(arr)
console.log(arr)
