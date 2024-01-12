import { execSync } from "child_process";
import Package from "./package.json";

start();

async function start() {
  if (!treeClean()) {
    console.warn("Aún tiene cambios pendientes, por favor haga commit");
    return;
  }

  const { version } = Package;
  execSync("ng build");
  execSync("git checkout release");
  execSync("git add docs/.");
  execSync(`git commit -m "v${version}"`);
  execSync(`git tag -a v${version}`);
  execSync(`git push`);
  execSync(`git push origin v${version}`);
}

function treeClean() {
  try {
    const result = execSync("git status");
    return result.toString("utf-8").includes("working tree clean");
  } catch (error) {
    console.error(error);
  }
  return false;
}
