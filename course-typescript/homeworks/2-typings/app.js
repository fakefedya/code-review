"use strict";
var NumberEquals;
(function (NumberEquals) {
    NumberEquals[NumberEquals["TEN"] = 10] = "TEN";
    NumberEquals[NumberEquals["ONE_HUNDRED"] = 100] = "ONE_HUNDRED";
    NumberEquals[NumberEquals["ONE_THOUSAND"] = 1000] = "ONE_THOUSAND";
    NumberEquals[NumberEquals["ONE_MILLION"] = 1000000] = "ONE_MILLION";
    NumberEquals[NumberEquals["ONE_BILLION"] = 1000000000] = "ONE_BILLION";
    NumberEquals[NumberEquals["ONE_TRILLION"] = 1000000000000] = "ONE_TRILLION";
    NumberEquals[NumberEquals["ONE_QUADRILLION"] = 1000000000000000] = "ONE_QUADRILLION";
    NumberEquals[NumberEquals["MAX"] = 9007199254740992] = "MAX";
})(NumberEquals || (NumberEquals = {}));
const lessThenTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];
const lessThenHundred = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
];
/*
 Converts an integer into words.
 If number is decimal, the decimals will be removed.
 @example toWords(12) => 'twelve'
 @param {number|string} number
 @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 @returns {string}
*/
const isFiniteNumber = (value) => typeof value === 'number' && Number.isFinite(value);
const isSafeNumber = (value) => typeof value === 'number' && Math.abs(value) <= NumberEquals.MAX;
const makeOrdinal = (word) => {
    if (!word)
        return '';
    if (word.endsWith('one'))
        return word.slice(0, -3) + 'first';
    if (word.endsWith('two'))
        return word.slice(0, -3) + 'second';
    if (word.endsWith('three'))
        return word.slice(0, -5) + 'third';
    if (word.endsWith('five'))
        return word.slice(0, -4) + 'fifth';
    if (word.endsWith('eight'))
        return word.slice(0, -5) + 'eighth';
    if (word.endsWith('nine'))
        return word.slice(0, -4) + 'ninth';
    if (word.endsWith('twelve'))
        return word.slice(0, -6) + 'twelfth';
    return word + 'th';
};
const toWords = (number, asOrdinal = false) => {
    const num = parseInt(number, 10);
    if (!isFiniteNumber(num)) {
        throw new TypeError(`Not a finite number: ${number} (${typeof number})`);
    }
    if (!isSafeNumber(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    const words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
};
const generateWords = (number, words = []) => {
    if (number === 0) {
        return words.length === 0 ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }
    let remainder = 0;
    let word = '';
    if (number < 20) {
        word = lessThenTwenty[number];
        remainder = 0;
    }
    else if (number < NumberEquals.ONE_HUNDRED) {
        remainder = number % NumberEquals.TEN;
        word = lessThenHundred[Math.floor(number / NumberEquals.TEN)];
        if (remainder) {
            word += `-${lessThenTwenty[remainder]}`;
            remainder = 0;
        }
    }
    else if (number < NumberEquals.ONE_THOUSAND) {
        remainder = number % NumberEquals.ONE_HUNDRED;
        word = `${generateWords(Math.floor(number / NumberEquals.ONE_HUNDRED))} hundred`;
    }
    else if (number < NumberEquals.ONE_MILLION) {
        remainder = number % NumberEquals.ONE_THOUSAND;
        word = `${generateWords(Math.floor(number / NumberEquals.ONE_THOUSAND))} thousand,`;
    }
    else if (number < NumberEquals.ONE_BILLION) {
        remainder = number % NumberEquals.ONE_MILLION;
        word = `${generateWords(Math.floor(number / NumberEquals.ONE_MILLION))} million,`;
    }
    else if (number < NumberEquals.ONE_TRILLION) {
        remainder = number % NumberEquals.ONE_BILLION;
        word = `${generateWords(Math.floor(number / NumberEquals.ONE_BILLION))} billion,`;
    }
    else if (number < NumberEquals.ONE_QUADRILLION) {
        remainder = number % NumberEquals.ONE_TRILLION;
        word = `${generateWords(Math.floor(number / NumberEquals.ONE_TRILLION))} trillion,`;
    }
    else if (number <= NumberEquals.MAX) {
        remainder = number % NumberEquals.ONE_QUADRILLION;
        word = `${generateWords(Math.floor(number / NumberEquals.ONE_QUADRILLION))} quadrillion,`;
    }
    words.push(word);
    return generateWords(remainder, words);
};
console.log(toWords('-15'));
console.log(toWords('5'));
console.log(toWords('12345'));
console.log(toWords('12345', true));