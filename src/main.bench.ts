import { styleText } from "node:util"

import ansiColors from "ansi-colors"
import ansis from "ansis"
import chalk from "chalk"
import * as colorette from "colorette"
import picocolors from "picocolors"
import { bench, describe, BenchOptions } from "vitest"

import { pkgs } from "./packages"

describe(
  "one (red)",
  () => {
    bench(pkgs.native, () => {
      styleText("red", "foo")
    })

    bench(pkgs["ansi-colors"], () => {
      ansiColors.red("foo")
    })

    bench(pkgs.ansis, () => {
      ansis.red("foo")
    })

    bench(pkgs.chalk, () => {
      chalk.red("foo")
    })

    bench(pkgs.colorette, () => {
      colorette.red("foo")
    })

    bench(pkgs.picocolors, () => {
      picocolors.red("foo")
    })
  },
  { sequential: true },
)

describe(
  "two (red, bold)",
  () => {
    bench(pkgs.native, () => {
      styleText("red", styleText("bold", "foo"))
    })

    bench(pkgs["ansi-colors"], () => {
      ansiColors.red.bold("foo")
    })

    bench(pkgs.ansis, () => {
      ansis.red.bold("foo")
    })

    bench(pkgs.chalk, () => {
      chalk.red.bold("foo")
    })

    bench(pkgs.colorette, () => {
      colorette.red(colorette.bold("foo"))
    })

    bench(pkgs.picocolors, () => {
      picocolors.red(picocolors.bold("foo"))
    })
  },
  { sequential: true },
)

describe(
  "three (blue, bold, italic)",
  () => {
    bench(pkgs.native, () => {
      styleText("blue", styleText("bold", styleText("italic", "foo")))
    })

    bench(pkgs["ansi-colors"], () => {
      ansiColors.blue.bold.italic("foo")
    })

    bench(pkgs.ansis, () => {
      ansis.blue.bold.italic("foo")
    })

    bench(pkgs.chalk, () => {
      chalk.blue.bold.italic("foo")
    })

    bench(pkgs.colorette, () => {
      colorette.blue(colorette.bold(colorette.italic("foo")))
    })

    bench(pkgs.picocolors, () => {
      picocolors.blue(picocolors.bold(picocolors.italic("foo")))
    })
  },
  { sequential: true },
)

describe("complex", () => {
  bench(pkgs.native, () => {
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

  bench(pkgs["ansi-colors"], () => {
    ansiColors.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
  })

  bench(pkgs.ansis, () => {
    ansis.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
  })

  bench(pkgs.chalk, () => {
    chalk.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
  })

  bench(pkgs.colorette, () => {
    colorette.bgBlack(
      colorette.magenta(
        colorette.yellow(
          colorette.red(
            colorette.cyan(colorette.blue(colorette.bold(colorette.italic("foo")))),
          ),
        ),
      ),
    )
  })

  bench(pkgs.picocolors, () => {
    picocolors.bgBlack(
      picocolors.magenta(
        picocolors.yellow(
          picocolors.red(
            picocolors.cyan(picocolors.blue(picocolors.bold(picocolors.italic("foo")))),
          ),
        ),
      ),
    )
  })
})
