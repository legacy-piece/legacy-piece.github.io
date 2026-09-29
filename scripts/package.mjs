import { existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const output = join(root, "out");
const release = join(root, "release");
const { name } = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const archive = join(release, `${name}.zip`);

if (!existsSync(join(output, "index.html"))) {
  throw new Error("Static site output is missing. Run npm run build:site first.");
}

mkdirSync(release, { recursive: true });
const temporaryDirectory = mkdtempSync(join(release, ".package-"));
const temporaryArchive = join(temporaryDirectory, `${name}.zip`);

try {
  const result = spawnSync("zip", ["-q", "-r", temporaryArchive, "."], {
    cwd: output,
    stdio: "inherit",
  });
  if (result.error) {
    throw new Error(`Could not run zip: ${result.error.message}`);
  }
  if (result.status !== 0) {
    throw new Error(`zip failed with exit code ${result.status}`);
  }

  renameSync(temporaryArchive, archive);
  console.log(`Created ${archive}`);
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
