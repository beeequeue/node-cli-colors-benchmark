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
  bar [1.0000, 1.1883, 2.9270, 3.6189, 4.8152, 5.3885]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > two (red, bold)"
  x-axis ["ansis@2.3.0", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.0.0", "node:util@22.1.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 1.1394, 2.1772, 3.8057, 6.4463, 8.4372]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > three (blue, bold, italic)"
  x-axis ["ansis@2.3.0", "colorette@2.0.20", "chalk@5.3.0", "picocolors@1.0.0", "node:util@22.1.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 2.0984, 2.5773, 5.5369, 10.1776, 13.7858]
```

```mermaid
xychart-beta
  title "src/main.bench.ts > complex"
  x-axis ["ansis@2.3.0", "chalk@5.3.0", "colorette@2.0.20", "picocolors@1.0.0", "node:util@22.1.0", "ansi-colors@4.1.3"]
  y-axis Difference from fastest
  bar [1.0000, 4.1101, 9.3336, 18.4526, 22.1868, 49.5891]
```
