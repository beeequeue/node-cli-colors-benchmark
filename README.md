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
  x-axis ["colorette@2.0.20", "ansis@2.3.0", "picocolors@1.0.0", "chalk@5.3.0", "node:util@22.5.1", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 1.1541, 3.0158, 4.5723, 4.9722, 5.5895]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > two (red, bold)"
  x-axis ["ansis@2.3.0", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.0.0", "node:util@22.5.1", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 1.3401, 3.2930, 4.1972, 7.5553, 9.4031]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > three (blue, bold, italic)"
  x-axis ["ansis@2.3.0", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.0.0", "node:util@22.5.1", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 1.9636, 2.5863, 5.7097, 9.8296, 14.3438]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > complex"
  x-axis ["ansis@2.3.0", "chalk@5.3.0", "colorette@2.0.20", "picocolors@1.0.0", "node:util@22.5.1", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 3.9320, 8.8911, 17.8708, 21.8199, 49.3448]
```
