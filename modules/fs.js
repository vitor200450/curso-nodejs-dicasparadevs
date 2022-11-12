import fs from "fs";
import path from "path";
import __dirname from "./path.js";

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) return console.log(err);

  console.log("Pasta criada com sucesso!");
});

// Criar um arquivo (ou sobrescrever por completo)
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "Hello Node.JS! ",
  (err) => {
    if (err) return console.log("Erro: ", err);

    console.log("Arquivo criado com sucesso!");

    // Adicionar conteúdo a um arquivo existente
    fs.appendFile(
      path.join(__dirname, "/test", "teste.txt"),
      "Hello World!",
      (err) => {
        if (err) return console.log("Erro: ", err);

        console.log("Arquivo modificado com sucesso!");
      },
    );

    // Ler um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf-8",
      (err, data) => {
        if (err) return console.log("Erro: ", err);

        console.log(data);
      },
    );
  },
);
