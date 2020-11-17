// Invoked on the commit-msg git hook by yorkie.first

const chalk = require("chalk");
const msgPath = process.env.GIT_PARAMS;
const msg = require("fs")
  .readFileSync(msgPath, "utf-8")
  .trim();

const releaseRE = /^v\d/;
// const commitRE = /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,80}/;
const commitRE = /^((:.+:)|(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) (revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,80}/;

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat: add 'comments' option`)}\n` +
      `    ${chalk.green(`fix: handle events on blur (close #28)`)}\n\n` +
      chalk.red(`  See .github/commit-convention.md for more details.\n`)
  );
  process.exit(1);
}
