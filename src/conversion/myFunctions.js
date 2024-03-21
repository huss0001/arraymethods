//Definitions:
// In all of these example functions and their tests, the following definitions should be used:
//"long":  any string which has a length of 7 or more.
//"odd": any number n for which n % 2 !== 0

/** return the first "long" string in the given array, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findFirstLongString(inputStrings) {
    
    let longString = inputStrings.find(str => str.length > 6)

    return longString;
}



/** return the first odd number in the given array of numbers, or undefined if none is found.
 * @param {number[]} inputNumbers
 * @return {number|undefined}
 */
function findFirstOddNumber(inputNumbers) {

    let oddNumber = inputNumbers.find(num => num % 2 !== 0)

    return oddNumber;
}

/** return the LAST "long" string in the given array of strings, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findLastLongString(inputStrings) {

    const lastLong = inputStrings.findLast(str => str.length > 6)

    return lastLong;
}

/** Given an array of strings of various lengths,
 * return a new array containing only the "long" strings from the input array
 * @param {string[]} inputStrings
 * @returns {string[]}
 * */
function findAllLongStrings(inputStrings) {

    const longString = inputStrings.filter(str => str.length > 6)

    return longString;
}

/** given an array of numbers, return a new array containing all the odd numbers in the input array.  Returns an empty array if none are found.
 * @param {number[]} inputNumbers
 * @return {number[]}
 */
function findAllOddNumbers(inputNumbers) {

    const oddNums = inputNumbers.filter(num => num % 2 !== 0)

    return oddNums;


}

/** Given an array of mixed types of value
 * return a new array containing only those elements of type string.
 * @param {any[]} inputArray
 * @returns {string[]}
 * */
function findAllTheStrings(inputArray) {

    const stringOnly = inputArray.filter(str => typeof str === 'string')

    return stringOnly;

}

/** Given an array of people objects,
 * return a new array containing only those people objects whose firstName OR secondName (or both) is long.
 * @param {{firstName: string, secondName:string}[]} inputObjects
 * @returns {{firstName: string, secondName:string}[]}
 * */
function findAllPeopleWithALongName(inputObjects) {

    const longString = inputObjects.filter(prsn => prsn.firstName.length > 6 || prsn.secondName.length > 6)

    return longString;

}

/** given an array of numbers return true if all of them are odd, else false.
 * @param {number[]} inputNumbers
 * @return {boolean}
 */
function areAllNumbersOdd(inputNumbers) {

    const allOdd = inputNumbers.every(num => num % 2 !== 0);

    return allOdd;
}

/** Given an array of strings of various lengths,
 * return true if all of the strings are "long", else false
 * @param {string[]} inputStrings
 * @returns {boolean}
 * */
function areAllStringsLong(inputStrings) {

    const longString = inputStrings.every(str => str.length > 6)

    return longString;
}

export {
    findFirstLongString,
    findFirstOddNumber,
    findLastLongString,
    findAllLongStrings,
    findAllOddNumbers,
    findAllTheStrings,
    findAllPeopleWithALongName,
    areAllNumbersOdd,
    areAllStringsLong,
};
