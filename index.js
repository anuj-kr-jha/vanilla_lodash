const log = console.log;

// * ------------------------------------------ARRAY METHODS-----------------------------------

/**
 * Creates an array of elements split into groups the length of size
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 * */
const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr];
    if (chunkSize <= 0) return cache;
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
};

// log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'])); // [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]
// log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)); // [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
// log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)); // []
// log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)); // []

// - Difference
/**
 * Creates an array of array values not included in the other given arrays.
 * */
const difference = (arr1 = [], arr2 = []) => arr1.filter((x) => !arr2.includes(x));
// log(difference([1, 2], [1, 4])); // [2]

/**
 * Creates an array of array values not included in the other given arrays.
 * */
const intersection = (arr, ...args) => arr.filter((item) => args.every((arr) => arr.includes(item)));

// log(intersection([1, 2, 3], [1, 3, 6])); // [1, 3]


// https://youmightnotneed.com/lodash/#intersection