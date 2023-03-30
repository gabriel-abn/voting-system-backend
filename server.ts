import { temasRouter } from "@main/routes/temas-routes";
import { userRoutes } from "@main/routes/user-routes";
import { votosRoutes } from "@main/routes/votos-routes";
import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/temas", temasRouter);
app.use("/users", userRoutes);
app.use("/votos", votosRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
