// sort and return clean array of non dublicats
export const removeDublicated = (arr) => { // also sort the arrays
    var sortedArr = arr.sort()
    var len = arr.length - 1;
    var newArr = [];

    if (len >= 0) {
        for (var i = 0; i < len; i++) {
            if (sortedArr[i] !== sortedArr[i + 1]) {
                newArr.push(sortedArr[i]);
            }
        }
        newArr.push(sortedArr[len]);
    }
    return newArr;
}