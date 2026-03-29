import { compile } from "sass";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const input = resolve(root, "scss", "_tokens-export.scss");
const output = resolve(root, "css", "tokens.css");

mkdirSync(dirname(output), { recursive: true });

const result = compile(input, { loadPaths: [resolve(root, "scss")] });
writeFileSync(output, result.css, "utf-8");
console.log(`Built ${output}`);
