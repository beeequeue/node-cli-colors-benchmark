import { execSync } from "node:child_process"

import { defineConfig } from "vitest/config"

const gitSha = execSync("git rev-parse --short HEAD").toString().trim()
export default defineConfig({
  test: {
    env: {
      GIT_SHA: JSON.stringify(gitSha),
    },
  },
})
