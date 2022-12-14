const fixZagged = (arr) => {
    if (arr.every(x => !Array.isArray(x))) {
        return arr;
    }

    let newArray = [];
    arr.forEach(x => {
        if (Array.isArray(x)) {
            newArray = [...newArray, ...x];
        } else {
            newArray.push(x);
        }
    });
    return fixZagged(newArray);

};
console.log(fixZagged([[2, 0, 4], [3, 3, [4, 4, 3, [3, [4, [4, [3, [4]]]]]]], 3, [4]]));
// Output => [2, 3, 3, 4, 4,3, 3, 4, 4, 3,4, 3]