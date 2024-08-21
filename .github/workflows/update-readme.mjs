#!/usr/bin/env zx

$.verbose = false;

const getOutput = ({ stdout }) => stdout;

const getWorkingTreeStatus = () => $`git status --porcelain`.then(getOutput);

(async () => {
  await $`echo ${"```vim"} > README.md`;
  await $`cat init.vim >> README.md`;
  await $`echo ${"```"} >> README.md`;

  await $`git config --local user.email "leonid.shutov.main@gmail.com"`;
  await $`git config --local user.name "leonid-shutov"`;
  await $`git add README.md`;

  if (!(await getWorkingTreeStatus())) {
    echo("Nothing to commit");
    process.exit(0);
  }

  await $`git commit -m "🔨UPDATE README🔨"`;
  await $`git push`;
})();
