import pkgJson from "../package.json" with { type: "json" }

export const pkgs = Object.fromEntries([
  ["native", `node:util@${process.versions.node}` as const],
  ...(
    Object.entries(pkgJson.dependencies) as [keyof typeof pkgJson.dependencies, string][]
  ).map(([name, version]) => [name, `${name}@${version}` as const] as const),
])
