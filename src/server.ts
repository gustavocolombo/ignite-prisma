import express from "express";
import routes from "./routes";
import { errors } from "celebrate";

const app = express();
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
