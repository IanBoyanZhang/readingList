/**
 * JS implementation of regular experssion matcher
 * C implementation is discussed in Brian Kernighan's artcile
 * "A Regular Expression Matcher"
 */

/**
 * Match: search for regexp anywhere in text
 * @param {string} text
 * @param {string} regexp string
 * @return {boolean} 
 */

var symbolTbl = ["^", "*", "\0", ".", "$"];

var match = function(text, regexp) {
//  if (typeof regexp === 'object') regexp = regexp.toString().split("").slice(1).join("");
  if (regexp[0] === symbolTbl[0]) ;
};

/**
 * Match: search for regexp at beginning of text
 * @param {string} text
 * @param {string} regexp string
 * @return {boolean} 
 */
var matchhere = function(text, regexp) {
  if (regexp[0] === symbolTbl[2]) return true;
  if (regexp[1] === '*') return;
};

/**
 * Match: search for c*regexp at beginning of text
 * @param {string} c
 * @param {string} text
 * @param {string} regexp string
 * @return {boolean} 
 */
var matchstar = function(c, text, regexp) {

};
