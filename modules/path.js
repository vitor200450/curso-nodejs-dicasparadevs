import path from "path";
import * as url from "url";

// Apenas o nome do arquivo atual
const __filename = url.fileURLToPath(import.meta.url);

// Nome do diretório atual
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Basename
console.log("Nome do arquivo:", path.basename(__filename));

console.log("Pasta:", path.basename(__dirname));

// Extensão do arquivo
console.log("Extensão:", path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "index.html"));

export default __dirname;
