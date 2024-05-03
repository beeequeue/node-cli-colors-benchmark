import data from "./bench.json" with { type: "json" }
import dedent from "ts-dedent"
import { readFileSync, writeFileSync } from "node:fs"

const toResult = (input: (typeof data)["files"][number]["groups"][number]) => ({
  name: input.fullName,
  packages: input.benchmarks
    .map((b) => ({
      name: b.name,
      hz: b.hz,
      rank: b.rank,
    }))
    .sort((a, b) => a.rank - b.rank),
})

const toGraph = (input: ReturnType<typeof toResult>) => {
  const xAxis = input.packages.map((p) => p.name)
  const yAxis = input.packages.map((p) => Math.round(p.hz))
  const maxHz = Math.max(...yAxis)

  return dedent`
    \`\`\`mermaid
    xychart-beta
      title "${input.name}"
      x-axis ["${xAxis.join('", "')}"]
      y-axis Difference from fastest
      bar [${yAxis.map((hz) => (maxHz / hz).toFixed(4)).join(", ")}]
    \`\`\`
  `
}

const results = data.files
  .map((f) => {
    const results = f.groups.map(toResult)

    return results.map(toGraph).join("\n")
  })
  .join("\n\n")

const contents = readFileSync("./README.md", "utf8")

writeFileSync(
  "./README.md",
  contents.replace(/<!-- charts -->\s+[^]+/m, `<!-- charts -->\n\n${results}\n`),
  "utf8",
)
