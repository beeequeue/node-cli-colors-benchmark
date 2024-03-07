# color-perf

## Run it

1. Install node 21.7+
1. pnpm install
1. pnpm run bench

## Results

Ran with a Ryzen 5950x:

![Results](./.github/img/results.webp)

_TODO: Create and automatically update graph:_

```mermaid
xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
```
