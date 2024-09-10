import { styleText } from "node:util"

import ansiColors from "ansi-colors"
import ansis from "ansis"
import chalk from "chalk"
import * as colorette from "colorette"
import picocolors from "picocolors"
import { type BenchOptions, bench, describe } from "vitest"

import { pkgs } from "./packages"

const options = {
  time: 100,
} satisfies BenchOptions

describe(
  "one (red)",
  () => {
    bench(
      pkgs.native,
      () => {
        styleText("red", "foo")
      },
      options,
    )

    bench(
      pkgs["ansi-colors"],
      () => {
        ansiColors.red("foo")
      },
      options,
    )

    bench(
      pkgs.ansis,
      () => {
        ansis.red("foo")
      },
      options,
    )

    bench(
      pkgs.chalk,
      () => {
        chalk.red("foo")
      },
      options,
    )

    bench(
      pkgs.colorette,
      () => {
        colorette.red("foo")
      },
      options,
    )

    bench(
      pkgs.picocolors,
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
    bench(
      pkgs.native,
      () => {
        styleText("red", styleText("bold", "foo"))
      },
      options,
    )

    bench(
      pkgs["ansi-colors"],
      () => {
        ansiColors.red.bold("foo")
      },
      options,
    )

    bench(
      pkgs.ansis,
      () => {
        ansis.red.bold("foo")
      },
      options,
    )

    bench(
      pkgs.chalk,
      () => {
        chalk.red.bold("foo")
      },
      options,
    )

    bench(
      pkgs.colorette,
      () => {
        colorette.red(colorette.bold("foo"))
      },
      options,
    )

    bench(
      pkgs.picocolors,
      () => {
        picocolors.red(picocolors.bold("foo"))
      },
      options,
    )
  },
  { sequential: true, repeats: 20_000 },
)

describe(
  "three (blue, bold, italic)",
  () => {
    bench(
      pkgs.native,
      () => {
        styleText("blue", styleText("bold", styleText("italic", "foo")))
      },
      options,
    )

    bench(
      pkgs["ansi-colors"],
      () => {
        ansiColors.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      pkgs.ansis,
      () => {
        ansis.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      pkgs.chalk,
      () => {
        chalk.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      pkgs.colorette,
      () => {
        colorette.blue(colorette.bold(colorette.italic("foo")))
      },
      options,
    )

    bench(
      pkgs.picocolors,
      () => {
        picocolors.blue(picocolors.bold(picocolors.italic("foo")))
      },
      options,
    )
  },
  { sequential: true, repeats: 20_000 },
)

describe(
  "complex",
  () => {
    bench(
      pkgs.native,
      () => {
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
      },
      options,
    )

    bench(
      pkgs["ansi-colors"],
      () => {
        ansiColors.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      pkgs.ansis,
      () => {
        ansis.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      pkgs.chalk,
      () => {
        chalk.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
      },
      options,
    )

    bench(
      pkgs.colorette,
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
      pkgs.picocolors,
      () => {
        picocolors.bgBlack(
          picocolors.magenta(
            picocolors.yellow(
              picocolors.red(
                picocolors.cyan(
                  picocolors.blue(picocolors.bold(picocolors.italic("foo"))),
                ),
              ),
            ),
          ),
        )
      },
      options,
    )
  },
  { sequential: true },
)
