import { adaptRoute } from "@infra/http";
import { makeDeleteUserController } from "@main/factories/users/controllers";
import {
  makeCreateVotoController,
  makeEditVotoController,
  makeGetAllVotosController,
  makeGetVotoByIdController,
} from "@main/factories/votos/controllers";
import { Router } from "express";

export const votosRoutes = Router();

votosRoutes.post("/", adaptRoute(makeCreateVotoController()));

votosRoutes.get("/", adaptRoute(makeGetAllVotosController()));

votosRoutes.get("/:id", adaptRoute(makeGetVotoByIdController()));

votosRoutes.put("/:id", adaptRoute(makeEditVotoController()));

votosRoutes.delete("/:id", adaptRoute(makeDeleteUserController()));
