import mongoose from "mongoose";

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs-dicasparade.4lilsvc.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um problema na conexão com o banco de dados: ",
          error,
        );
      }

      return console.log("Conexão realizada com sucesso!");
    },
  );
};

export default connectToDatabase;
