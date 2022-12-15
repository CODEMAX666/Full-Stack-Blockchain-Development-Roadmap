/*
Array Filter:-
        When filtering arrays, we want to come up with some boolean condition (true/false) that will determine if we should keep the element or not.
ex:-
const ones = [1,2,3,1,1].filter((function(el) {
    return (el === 1);
}));

*/

//lessThanFive.js
function lessThanFive(array) {
    return array.filter((x)=>{
        return (x<5);
    });
}

module.exports = lessThanFive;

//test.js
const { assert } = require('chai');
const lessThanFive = require('../lessThanFive');

describe('less than five', () => {
    it('should filter a few elements less than 5', () => {
        const expected = [0, 2, 4];
        const actual = lessThanFive([0, 2, 4, 6, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter several elements less than 5', () => {
        const expected = [1, 2, 3, 4];
        const actual = lessThanFive([1, 2, 3, 4, 5, 6, 7, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});

//onlyTrue.js
function onlyTrue(array) {
    return array.filter((x)=>{
        return x;
    });
}

module.exports = onlyTrue;

//test.js
const { assert } = require('chai');
const onlyTrue = require('../onlyTrue');

describe('only true', () => {
    it('should filter all false values', () => {
        const expected = [];
        const actual = onlyTrue([false, false, false]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter mixed false and true values', () => {
        const expected = [true, true, true];
        const actual = onlyTrue([false, true, true, false, true]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});


//shortString.js
function shortStrings(array) {
    return array.filter((str)=>{
        return (str.length<=3);
    });
}

module.exports = shortStrings;

//test.js
const { assert } = require('chai');
const shortStrings = require('../shortStrings');

describe('shortStrings', () => {
    it('should filter a few strings', () => {
        const expected = ["abc", "a"];
        const actual = shortStrings(["abc", "abcd", "a"]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter many strings', () => {
        const expected = ["a", "b", "bat", "cde", "f"];
        const actual = shortStrings(["a", "apples", "b", "bats", "bat", "pizza", "cde", "f"]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});
