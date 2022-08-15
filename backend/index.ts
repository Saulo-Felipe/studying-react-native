import express from "express";

const app = express();


app.listen("/", (request: Request, response: Response) => {
  console.log(request);
  response.send("ola mundo");
});


app.listen(8081, () => console.log("Server is running."));