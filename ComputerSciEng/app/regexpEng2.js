/**
 * JS implementation of regular experssion matcher is inpired by
 * C implementation discussed in Brian Kernighan's artcile
 * "A Regular Expression Matcher" Beautiful Code Chapter 1
 */

/**
 * Match: search for regexp anywhere in text
 * @param {string} text
 * @param {string} regexp string
 * @return {boolean} 
 */

var symbolTbl = ["^", "*", "\0", ".", "$"];

var match = function(text, regexp) {
  var currText = text[0];
  if (regexp[0] === "^") 
    return matchhere(regexp.slice(1), text);
  do {
    if (matchhere(regexp, text))
      return 1;
  } while (text++ !== "\0");
  return 0;
};

// Now cook my own version of matchhere 
var match = function(regexp, text) {

};

/**
 * Match: search for regexp at beginning of text
 * @param {string} text
 * @param {string} regexp string
 * @return {boolean} 
 */

/*
var matchhere = function(text, regexp) {
  if (regexp[0] === symbolTbl[2]) 
    return 1;
  if (regexp[1] === '*') 
    return matchstar(regexp[0], regexp.slice(2), text);
  if (regexp[0] === symbolTbl[1] && regexp[1] === symbolTbl[2])
    return text === symbolTbl[2];
  if (text!==symbolTbl[2] && (regexp[0] === symbolTbl[3] || regexp[0] === text))
    return matchhere(regexp.slice(1), text.slice(1));
  return 0;
};*/

/**
 * Match: search for c*regexp at beginning of text
 * @param {string} c
 * @param {string} text
 * @param {string} regexp string
 * @return {boolean} 
 */

/*
var matchstar = function(c, text, regexp) {
  var currText = "", iter = 0;
  do { // a * matches zero or more instances
    if (matchhere(regexp, text)) return 1;
  } while (text[iter] !== symbolTbl[2] && (text[iter++] === c || c === symbolTbl[3]));
  return 0;
};*/


// TestCase
var s = "abbbc", regexp = 'abbbc';
console.log(match(s, regexp));
