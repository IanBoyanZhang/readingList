# Theorem 

Given any NFA, there is an equivalent DFA

# Why NFA and DFA?

NFA --> Easier for human to construct
DFA --> The way computer works better

"When traversing an NFA, if we would write an algorithm, which would use an NFA to check for an accepting combination of chars, it 
would involve backtracking to check for choices that it did not make previously."

"There are regular expression parsers which works using NFAs, but they are generally slower than those that use DFAs, this is due to
the fact that a DFA has a unique path for each accepting string, so no backtracking is involved."

# Thompson`s Algo

## Example of evaluating math expression

```
R = A + B * C - D;

PUSH A

PUSH B

PUSH C

MUL 

ADD 

PUSH D

SUB

POP R
```
Stack Push Pop 

1 operator 2 operands

## Example of evaluating regular expression

```
(a|b)*cd

PUSH a

PUSH b

UNION

STAR

PUSH c

CONCAT

PUSH d

CONCAT

POP R
```

In regular expression the star operation pops only one element from the stack and evaluates the star operator

The concatenation operation is not denoted by any symbol. Would have to detect it 

One solution: 

Pre-processing the regular expression and inserting a character ASCII code 0x8 whenever a concatenation is detected.

Pre-processing does nothing else but detects a combination of symbols that would result in concatenation

# A simple matcher

| Character     | Meaning       |
| ------------- |:-------------:|
| c             | matches any literal charcter c |
| .(period)     | matches any single character    |
| ^             | matches the beginning of the input string |
| $             | matches the end of the input string |
| *             | matches zero or more occurance of the previous character|



# Terminology:

1. Nondeterministic Finite-State Automata (NFA)

2. Deterministic Finite-State Automata (DFA)

References:

1. [Writing own regular expression parser](http://www.codeproject.com/Articles/5412/Writing-own-regular-expression-parser)

2. [A DIY C implementation](https://github.com/wernsey/wregex) including actual implementation from above link

3. [REGEX in C](http://modelingwithdata.org/pdfs/176-regex.pdf) from Ben Klemens book: Modeling with Data

4. Book: Beautiful Code Chapter 1
