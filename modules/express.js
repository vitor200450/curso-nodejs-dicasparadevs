import express from "express";
import UserModel from "../src/models/user.model.js";

const app = express();
app.use(express.json()); // Sempre usar JSON nas requisições

// Configuração das view engines
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, res, next) => {
  // Middlewares - funções que são executadas antes de qualquer requisição
  console.log(`Tipo da requisição: ${req.method}`);
  console.log(`Tipo do conteúdo: ${req.headers["content-type"]}`);
  console.log(`Data atual: ${new Date()}`);

  next(); // Se a função next não for acionada, a requisição sempre ficará travada na middleware, impedindo o Node de prosseguir
});

// app.get("/home", (req, res) => {
//   res.contentType("application/html");
//   res.status(200).send("<h1>Hello Express!</h1>");
// });

app.get("/views/users", async (req, res) => {
  // Endpoint para exibir os usuários em uma view engine com EJS (exibe uma página HTML)
  const users = await UserModel.find({});

  res.render("index", { users });
});

app.get("/users", async (req, res) => {
  // Endpoint de listagem de usuários
  try {
    const users = await UserModel.find({});

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  // Endpoint de criação de um novo usuário
  try {
    const user = await UserModel.create(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  // Endpoint de listagem de um usuário por ID
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  // Endpoint de alteração de um usuário por ID
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  // Endpoint de exclusão de um usuário
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndDelete(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

const port = 8080;
app.listen(8080, () => {
  console.log(`Rodando com Express na porta ${port}`);
});
