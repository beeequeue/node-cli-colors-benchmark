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
  x-axis ["colorette@2.0.20", "ansis@3.3.2", "chalk@5.3.0", "picocolors@1.1.0", "ansi-colors@4.1.3", "node:util@22.8.0"]
  y-axis Difference from fastest
  bar [1.0000, 1.2242, 3.0563, 3.1742, 6.0268, 9.8374]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > two (red, bold)"
  x-axis ["ansis@3.3.2", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.1.0", "ansi-colors@4.1.3", "node:util@22.8.0"]
  y-axis Difference from fastest
  bar [1.0000, 1.1589, 3.0600, 4.0125, 9.2253, 13.6032]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > three (blue, bold, italic)"
  x-axis ["ansis@3.3.2", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.1.0", "ansi-colors@4.1.3", "node:util@22.8.0"]
  y-axis Difference from fastest
  bar [1.0000, 1.8920, 2.5667, 5.5117, 13.7788, 18.8354]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > complex"
  x-axis ["ansis@3.3.2", "chalk@5.3.0", "colorette@2.0.20", "picocolors@1.1.0", "node:util@22.8.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 3.9825, 8.5197, 18.4464, 40.7668, 46.0673]
```
