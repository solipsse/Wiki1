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

Default is Book

pydata-sphinx-theme\
furo