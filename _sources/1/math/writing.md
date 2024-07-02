# Discrete Mathematic

## 1. Foundations
### Set Theory
:::{admonition} Definition
:class: dropdown, note

Set
: A collection of distinct objects, considered as an object in its own right

Element
: an object that belongs to a set

Subset
: $A \subseteq B$ if ever element of $A$ is also an element of $B$

Proper Subset
: ALl the subset not including it self. As seen in the "less than" only sign $\subset$

Null Set $\phi$
: An empty set denoted $\phi = \{\}$

Universal set $\mathcal{U}$
: The set that contains all the objects under consideration

Power set
: The set of all subsets of a set $A$, denoted by $\mathcal{P}(A)$

**Operation**

$A\cup B,\hspace{2ex} A+B$, Union
: $\{x| x\in A \lor x\in B\}$

$A\cap B,\hspace{2ex} AB$, Intersection
: $\{x| x\in A \land x\in B\}$

$A-B$, Difference
: $\{x| x \in A \land x \notin B\}$

$\bar A, \hspace{2ex} \mathcal{U}-A$, Complement
: $\{x| x\notin A\}$ \
$\{x| x \in \mathcal{U} \land x \notin A\}$

$A\times B$, Cartesian Product
: $\{(a,b)| a\in A \land b\in B\}$
:::

:::{admonition} Axiom
:class: dropdown, note

**ZF Set theory**

Extensionality
: Two sets are equal iff they have same element
: $\forall A\forall B (\forall x (x\in A \iff x \in B)\implies A=B)$
: The converse, $\forall A \forall B (A=B \implies \forall x (x\in A \iff x \in B))$

Regularity
: Every non-null set $A$ contains an element $B$ such that $A \land B$ are disjoint.

Pairing
: For any sets $A$ and $B$, there is a set $\{A,B\}$ that contains exctly $A$ and $B$.

Union
: For any set $A$, there is a set $\bigcup A$ that that contains all elements of the elements of $A$.

Power Set
: For any set $A$, there is a set $\mathcal{P}(A)$ that contains all the subsets of $A$.

Infinity
: There exists a set $\mathbb{N}$ that contains the $\phi$ and is closed under the successor function.

Replacement
: The image of a set under any definable function is also a set.

Choice
: For any set of non-null sets, there exists a choice function that selects an element from each set.
:::

:::{admonition} Lemma
:class: dropdown, note

Subset
: For any sets $A$ and $B$, if $A\subseteq B$ and $B\subseteq C$ -> $A\subseteq C$
:::
### Logic
- Propositional Logic (Statements, Connectives, Truth Tables)
- Predicate Logic (Quantifiers, Predicates)
- Logical Equivalences
- Inference Rules and Proofs

## 2. Counting and Combinatorics
### Basic Counting Principles
- Permutations and Combinations
- Pigeonhole Principle

### Advanced Counting Techniques
- Inclusion-Exclusion Principle
- Recurrence Relations
- Generating Functions

## 3. Relations and Functions
### Relations
- Properties of Relations (Reflexive, Symmetric, Transitive)
- Equivalence Relations and Partitions
- Partial Orders

### Functions
- Definition and Types (Injective, Surjective, Bijective)
- Composition and Inverse Functions
- Graph of a Function

## 4. Number Theory
### Divisibility and Prime Numbers
- Greatest Common Divisor (GCD)
- Euclidean Algorithm

### Modular Arithmetic
- Congruences
- Chinese Remainder Theorem

### Cryptography Basics
- RSA Algorithm
- Public Key Cryptography

## 5. Graph Theory
### Basics of Graphs
- Types of Graphs (Undirected, Directed, Weighted)
- Graph Terminology (Vertices, Edges, Degree)

### Graph Algorithms
- Paths and Circuits
- Eulerian and Hamiltonian Paths
- Shortest Path Algorithms (Dijkstra’s, Bellman-Ford)
- Minimum Spanning Tree (Kruskal’s, Prim’s)

## 6. Trees
### Properties of Trees
- Definition and Terminology (Root, Leaf, Height)
- Binary Trees, Binary Search Trees

### Tree Traversals
- Preorder, Inorder, Postorder

### Applications of Trees
- Expression Trees
- Huffman Coding

## 7. Algebraic Structures
### Groups, Rings, and Fields
- Definitions and Examples
- Group Homomorphisms

### Boolean Algebra
- Boolean Functions
- Simplification of Boolean Expressions
- Applications in Digital Logic

## 8. Automata Theory and Formal Languages
### Finite Automata
- Deterministic Finite Automata (DFA)
- Non-Deterministic Finite Automata (NFA)

### Regular Expressions

### Context-Free Grammars

### Turing Machines

## Recommended Learning Path
1. Foundations (Set Theory and Logic)
2. Counting and Combinatorics
3. Relations and Functions
4. Number Theory
5. Graph Theory
6. Trees
7. Algebraic Structures
8. Automata Theory and Formal Languages
ormal Language