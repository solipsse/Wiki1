# Combinatorics

>[main.md](math.md)

Following the upcoming principles to be discussed will ease our counting that where we can find the method to take immediately. We will borrow some logics as well so learn that first!

## Preliminary Consideration

### Restriction, Repeatability and Distinguishaibilit

**Restriction** are condition that our counting must satisfy. This reduce the totle possible outcomes. It can be count using constructive and complementary approach or by case.

An object are consider to be **repeatable** they can be resused or replaced. E.g. a binary number with n bit has $2^n$ total possibility because each one can be 0 or 1, and using 1 doesn't mean it can't use 1 again. $\overline{Replacemnet} = \Delta {(possible \land total)} = \Delta {probability}$ 

**Distinguishable** object are unique, such as distinct people, distinct solutions, and distinct set of things.

Refer to [Notation](notation.md) to understand how we will generalise solving each counting problem.

We will use these three consideration points to find a way to tackle with enumeration problems.

### Rules of sum and products

| |Sum|Product|
|-|:-:|:-:|
|Logic|$A+B$|$AB$ (A and then B)|
|Total|$\|A\| + \|B\|$|$\|A\|\times\|B\|$|

In general, $add$ when we need to pick one OR another but not simultaneously, and $multiply$ when $\overline{add}$, i.e. pick one AND another simultaneously.

**Casework** is a counting techniques that utilise rules of sum. We looks at all the conditions that match the OR logic and splits them into cases. This can be daunting; having many cases in exam may be a sign that we need to find a smarter way of thinking. For example, complementary counting.

### Inclusion-Exclusion Principles

This rules ensure that we count everything once only by adding things more than one and account for the overcount

#### Overcounting

We usually overcount things because it is easier to count all case then divide by repeated amount.

### Complementary Counting

If there are many case it might be better to count the opposite and do  
$\text{Total} - \text{Invalid}$

### Connstructive Counting

We construct the arrangement that satisfy the condition then we count the possible number of ways. This is usually use against restrition and is done when we are drawing the box to choose something into, thinking about number of things to put into the boxes.

## Arrangement

$$_{A}|WORD| =\underbar{4}\hspace{.5ex}\underbar{3}\hspace{.5ex}\underbar{2}\hspace{.5ex}\underbar{1}=4!\hspace{10ex} \bar{R}\bar{R}D$$

Looking at the number of characters to place in 4 spaces, we can put 4, then 3, then 2 and then 1. {Rule of product}

### Choosing from n things to put into r places

#### Permutation

The arrangement above can be seen as a speacial permutation P(4,4) = 4!

$$\begin{align*}
_A|3\text{ books}, 5\text{ books}| &= \underbar{5}\hspace{.5ex}\underbar{4}\hspace{.5ex}\underbar{3}\hspace{10ex} \bar{R}\bar{R}D\\
&= \frac{5!}{2!}\\
&=P(5,3)
\end{align*}$$

Permutation can be thought purely with law of product, but if we can generalise then we will do work faster.

$P(n,r)\equiv n^{\underbar{r}} \equiv \frac{n!}{(n-r)!}$

#### Combination

$$\begin{align*}
_{A}|AABBB| &= _A|2 \text{ A's}, 5\text{ Letter}|\hspace{10ex} \bar{R}\bar{R}\bar{D} \{X\}\\
&= \frac{_{A}|A_1A_2B_1B_2B_3|}{_{A}|A_1A_2| \text{ and }_{A}|B_1B_2B_3|}\\
&=\frac{5!}{2!3!}\hspace{10ex} \bar{R}\bar{R}D\\
&=C(5,2) \equiv C(5,3)
\end{align*}$$

We can use law of product by assuming A and B are distinct and then divide to account for overcounting as each combination of A's and B's will be repeated by the amount of possible combinations A's and B's.

For 5 place we choose 2 A $\to$ fill what left with B (1 way becuase all B are $\bar{D}$) or  
For 5 place we choose 3 B $\to$ fill what left with A (1 way becuase all A are $\bar{D}$)

$C(n,r) \equiv \frac{n^{\underbar{r}}}{r!}\equiv \frac{n!}{r!(n-r)!} \equiv C(n,n-r)$

[^1]: Proof
