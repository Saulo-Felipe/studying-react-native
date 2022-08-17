const express = require("express");
const sequelize = require("./services/database");

const app = express();


app.use(express.json());



app.get("/", (request, response) => {
  response.send("ola mundo");
});

app.post("/create", async (request, response) => {
  try {
    const {username, password} = request.body;
    console.log("body: ", request.body);

    if (username.length > 0 && username.length > 0) {
      const [user] = await sequelize.query(`
        INSERT INTO "Users" (name, password, "createdAt", "updatedAt")
        VALUES (
          '${username}', 
          '${password}', 
          '${new Date().toISOString().slice(0, 19).replace('T', ' ')}', 
          '${new Date().toISOString().slice(0, 19).replace('T', ' ')}'
        ) RETURNING *
      `);
      
      return response.json({ user });

    } else return response.status(500).json({ message: "Dados inválidos" });


  } catch(e) {
    return response.status(500).json({ message: "Erro desconhecido ao criar usuário" });
  }
});

app.post("/login", async (request, response) => {
  try {
    const {username, password} = request.body;

    if (username?.length > 0 && username?.length > 0) {

      const [user] = await sequelize.query(`
        SELECT * FROM "Users" 
        WHERE name = '${username}' AND password = '${password}'
      `);

      if (user.length > 0) {
        return response.json({ user: user[0] })
      }
    }
    
    return response.status(500).json({ message: "Dados inválidos" });

  } catch(e) {
    console.log(e);
    return response.status(500).json({ message: "Erro ao realizar login" });
  }
});



app.listen(8081, () => console.log("Server is running."));