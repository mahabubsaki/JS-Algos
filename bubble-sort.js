const bubbleSort = (arr) => {
    let traverse = 0;
    while (traverse < (arr.length)) {
        for (let i = 0; i < (arr.length); i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
        traverse++;
    }
    return arr;
};

console.log(bubbleSort([1, 5, 6, 93, 43, 67, 9, 2, 4, 28, 12, 3]));
