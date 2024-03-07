import { styleText } from "node:util"

import ansiColors from "ansi-colors"
import ansis from "ansis"
import chalk from "chalk"
import * as colorette from "colorette"
import picocolors from "picocolors"
import { bench, describe } from "vitest"

const options = {
  warmupIterations: process.env.CI ? 250 : 50,
  iterations: process.env.CI ? 1000 : 100,
}

describe(
  "one (red)",
  () => {
    bench("node:util", () => {
      styleText("red", "foo")
    })

    bench(
      "ansi-colors",
      () => {
        ansiColors.red("foo")
      },
      options,
    )

    bench(
      "ansis",
      () => {
        ansis.red("foo")
      },
      options,
    )

    bench(
      "chalk",
      () => {
        chalk.red("foo")
      },
      options,
    )

    bench(
      "colorette",
      () => {
        colorette.red("foo")
      },
      options,
    )

    bench(
      "picocolors",
      () => {
        picocolors.red("foo")
      },
      options,
    )
  },
  { sequential: true },
)

describe(
  "two (red, bold)",
  () => {
    bench("node:util", () => {
      styleText("red", styleText("bold", "foo"))
    })

    bench(
      "ansi-colors",
      () => {
        ansiColors.red.bold("foo")
      },
      options,
    )

    bench(
      "ansis",
      () => {
        ansis.red.bold("foo")
      },
      options,
    )

    bench(
      "chalk",
      () => {
        chalk.red.bold("foo")
      },
      options,
    )

    bench(
      "colorette",
      () => {
        colorette.red(colorette.bold("foo"))
      },
      options,
    )

    bench(
      "picocolors",
      () => {
        picocolors.red(picocolors.bold("foo"))
      },
      options,
    )
  },
  { sequential: true },
)

describe(
  "three (blue, bold, italic)",
  () => {
    bench("node:util", () => {
      styleText("blue", styleText("bold", styleText("italic", "foo")))
    })

    bench(
      "ansi-colors",
      () => {
        ansiColors.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      "ansis",
      () => {
        ansis.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      "chalk",
      () => {
        chalk.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      "colorette",
      () => {
        colorette.blue(colorette.bold(colorette.italic("foo")))
      },
      options,
    )

    bench(
      "picocolors",
      () => {
        picocolors.blue(picocolors.bold(picocolors.italic("foo")))
      },
      options,
    )
  },
  { sequential: true },
)

describe("complex", () => {
  bench("node:util", () => {
    styleText(
      "blue",
      styleText(
        "cyan",
        styleText(
          "red",
          styleText(
            "yellow",
            styleText(
              "magenta",
              styleText("bgBlack", styleText("bold", styleText("italic", "foo"))),
            ),
          ),
        ),
      ),
    )
  })

  bench(
    "ansi-colors",
    () => {
      ansiColors.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
    },
    options,
  )

  bench(
    "ansis",
    () => {
      ansis.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
    },
    options,
  )

  bench(
    "chalk",
    () => {
      chalk.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
    },
    options,
  )

  bench(
    "colorette",
    () => {
      colorette.bgBlack(
        colorette.magenta(
          colorette.yellow(
            colorette.red(
              colorette.cyan(colorette.blue(colorette.bold(colorette.italic("foo")))),
            ),
          ),
        ),
      )
    },
    options,
  )

  bench(
    "picocolors",
    () => {
      picocolors.bgBlack(
        picocolors.magenta(
          picocolors.yellow(
            picocolors.red(
              picocolors.cyan(picocolors.blue(picocolors.bold(picocolors.italic("foo")))),
            ),
          ),
        ),
      )
    },
    options,
  )
})
