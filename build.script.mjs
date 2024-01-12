import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const PACKAGE = './package.json';

start();

function start() {
  if (!treeClean()) {
    console.warn('Aún tiene cambios pendientes, por favor haga commit');
    return;
  }
  const { version } = JSON.parse(readFileSync(PACKAGE).toString('utf-8'));
  execSync('ng build');
  execSync('git checkout release');
  execSync('git add docs/.');
  execSync(`git commit -m "v${version}"`);
  execSync(`git tag -a v${version}`);
  execSync(`git push`);
  execSync(`git push origin v${version}`);
}

function treeClean() {
  try {
    const result = execSync('git status');
    return result.toString('utf-8').includes('working tree clean');
  } catch (error) {
    console.error(error);
  }
  return false;
}
