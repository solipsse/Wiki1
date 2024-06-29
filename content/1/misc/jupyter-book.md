# JupyterBook

## Math

It uses [MathJax]

> [!TIP] Use version 3 
> _config.yml 
> ```
> sphinx:
>   config:
>     mathjax_path: https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
> ```



[MathJax]:  https://docs.mathjax.org/en/latest/

### Inline

in line math with \$ \<equation\> \$

### Display/Block math

```
```{math}
:label: my-label
w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}```

\begin{equation}
x^2 + 2x + 4
\end{equation}

$$
x^2 + 2x + 4
$$

```

```{math}
w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}
```

\begin{equation}
x^2 + 2x + 4
\end{equation}

$$
x^2 + 2x + 4
$$

## Sphinx Theme

By putting these package name in the requirement.txt.

Default is Book: current preference

pydata-sphinx-theme: modern theme, aren't a fan of the header design\
furo: great sidebar, not so good line spacing, but look great for showing code, header font too large and bold