# Logic

## 1. Mathematical Logic (Discrete)

### Propositional logic (zero-order logic)
:::{admonition} Definition
:class: note, dropdown

- Proposition, a declarative statement which has one truth value (True or False).
- String is any finite sequence of symbols one after another with no gap
- Formula are define as
  - Every prpositional variable is a formula
  - string A is a formula $\to$ $\bar A$ is a formula
  - Both string A and B are formulas $\to$ so are
    - $A \to B$
    - $A \land B$
    - $A \lor B$
    - $A \leftrightarrow B$
- Valuation is a propositional function that assign evaluate true and false
  - $L(\phi)=1 \to$ ...
- Tautology (T) is always true, and Contradiction (F) is always false


:::

:::{admonition} Order of Operation
:class: important, dropdown
1. parentheses ()[]
2. not $\neg$
3. and (left to right) $\land$
4. or (left to right) $\lor$
5. if...then $\to$
6. iff $\leftrightarrow$
:::
:::::{admonition} Theorem and Lemma List
:class: important, dropdown

Theorem

- The unique readability theorem

Lemma

- $\phi$ is a formula $\to$
  - Either $\phi$ is a propositional variable.
  - or the first symbol of $\phi$ is $\neg$.
  - or the first symbol of $\phi$ is a (.
::::{grid}
:gutter: 3

:::{grid-item-card} Identity Laws
- $PT \equiv P$
- $P+F \equiv P$
:::

:::{grid-item-card} Domination Laws
- $P+T \equiv T$
- $PF \eqiv F$
:::

:::{grid-item-card} Indempotent Laws
- $P+P \equiv P$
- $PP \equiv P$
:::
:::: 

:::::

::::{admonition} Connective table
:class: toggle

:::{list-table}
:header-rows: 1

* - Symbol
  - Connective
  - Meaning
* - $\land$
  - Conjunction
  - And
* - $\lor$
  - Disjunction
  - Or
* - $\oplus$
  - Exclusive Disjunction
  - Xor
* - $\neg$
  - Negation
  - Not
* - $\to$
  - Conditional / Implication
  - ...implies...
* - $\leftrightarrow$
  - Biconditional
  - iff
:::
::::

Most of the proof for logicl equivalence use truth table or intuition.

:::{admonition} Lemma: Logical equivalence
:class: important

- 

:::

### Predicate logic
### Proof techniques
### Model theory
### Proof theory
### Computability theory
### Gödel's incompleteness theorems
---