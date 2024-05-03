# color-perf

## Run it

1. Install node 21.7+
1. pnpm install
1. pnpm run bench

## Results

Ran on a basic GH Actions runner.

Lower is better. Leftmost is the base, with the others being the difference from the base.

<!-- charts -->

```mermaid
xychart-beta
  title "src/main.bench.ts > one (red)"
  x-axis ["colorette@2.0.20", "ansis@2.3.0", "picocolors@1.0.0", "chalk@5.3.0", "node:util@22.1.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 1.1901, 3.9615, 4.1638, 5.8714, 6.6578]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > two (red, bold)"
  x-axis ["ansis@2.3.0", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.0.0", "node:util@22.1.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 1.2335, 3.2860, 5.3988, 8.5129, 11.3125]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > three (blue, bold, italic)"
  x-axis ["ansis@2.3.0", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.0.0", "node:util@22.1.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 1.9656, 3.2386, 7.0949, 11.2273, 15.1919]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > complex"
  x-axis ["ansis@2.3.0", "chalk@5.3.0", "colorette@2.0.20", "picocolors@1.0.0", "node:util@22.1.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 4.7603, 8.8243, 23.9734, 24.3271, 50.0592]
```
