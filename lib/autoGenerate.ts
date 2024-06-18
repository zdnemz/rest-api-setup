import * as fs from "fs";
import * as path from "path";

interface Route {
  alias?: string;
  path: string;
}

function getRoutes(dir: string): Route[] {
  const routes: Route[] = [];

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      generateIndexFile(filePath, file);
      const indexPath = path.join(
        filePath,
        dir.includes(path.sep + "types") ? "index.d.ts" : "index.ts"
      );

      if (fs.existsSync(indexPath)) {
        routes.push({
          alias: path.basename(filePath),
          path: indexPath,
        });
      }
    } else {
      const ext = path.extname(file);
      if (
        (ext === ".ts" || ext === ".d.ts") &&
        path.basename(file) !== "index.ts"
      ) {
        routes.push({
          path: filePath,
        });
      }
    }
  });

  return routes;
}

function generateIndexFile(dir: string, file: string): void {
  const routes = getRoutes(dir);

  const exportStatements = routes.map((route) => {
    const relativePath = path
      .relative(dir, route.path)
      .replace(/\\/g, "/")
      .split(/\/index\.(d.ts|ts)$/)[0];

    if (route.alias) {
      return `export ${file === "types" ? "type " : ""}* as ${
        route.alias
      } from "./${relativePath.split(".")[0]}";`;
    } else {
      return `export ${file === "types" ? "type " : ""}* from "./${
        relativePath.split(".")[0]
      }";`;
    }
  });

  const exportFileContent = exportStatements.join("\n");
  const indexPath = !dir.includes(path.sep + "routes")
    ? !dir.includes(path.sep + "types")
      ? path.join(dir, "index.ts")
      : path.join(dir, "index.d.ts")
    : "";
  if (indexPath) {
    fs.writeFileSync(indexPath, exportFileContent);
  }
}

const generate = (dir: string) => {
  const routesDir = path.resolve(dir);

  fs.readdirSync(routesDir).forEach((file) => {
    const filePath = path.join(routesDir, file);
    const stat = fs.statSync(filePath);

    if (filePath.includes(path.sep + "routes")) {
      return;
    }

    if (stat.isDirectory()) {
      generateIndexFile(filePath, file);
    }
  });
};

export default generate;
