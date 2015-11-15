# Automata Theory

"Formal language theory is important in programming language design and is at the heart of modern compiler architectures. Automata theory contributes the concept of 
regular expression, used in many ways in pattern matching"

"Most important, computability theory, which can be considered a branch of automata theory, defines certain problems that have no solution"

'"Automata Theory" teaches you the very important equivalence between: 
  
  1. a language: some -- usually -- infinite set of strings

  2. a grammar: the finite set of rules to generate that language

  3. an automaton (not automation): the abstract processing device that can recognize that language
'

## Automatons 

are abstract models of machines that perform computations on an input by moving through a series of states or configurations. At each state of the computations,
a transistion function determines the next configuration on the basis of a finite portion of the present configuration. As a result, once the computation reaches an accepting
configuration, it accepts that input. The most general and powerful automata is

Turing machine

The major objective of automata theory is to develop methods by which computer scientists can describe and analyze the dynamic behavior of discrete systems. In which signals 
are sampled periodically. 

The behavior of these discrete systems is determined by the way that the system is constructed from storage and combinational elements. Characteristics of such machine includes:

  1. Inputs

  2. Outputs

  3. States: Finite set Q, whose definition depends on the type of automaton

## There are four major families of automation:

  1. Finite-state machine

  2. Pushdown automata

  3. Linear-bounded automata

  4. Turing machine

The families of automata above can be interpreted in a hierarchal form.

A Turing machine is a finite-state machine yet the inverse is not true

# FSM 
Finite machine --> recognize regular languages

Finite-state machines --> computational models for a small amount of memory, and do not maintain memory

References:

1. [What is the use of studying "Automata Theory and Formal Language" in Computer Science](https://www.quora.com/What-is-the-use-of-studying-Automata-Theory-and-Formal-Language-in-Computer-Science)

2. [How practical is Automata Theory](http://cstheory.stackexchange.com/questions/8539/how-practical-is-automata-theory)

3. [Automata Theory Introduction from Stanford CS course](http://cs.stanford.edu/people/eroberts/courses/soco/projects/2004-05/automata-theory/basics.html)
