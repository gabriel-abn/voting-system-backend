import { adaptRoute } from "@infra/http";
import {
  makeCreateTemaController,
  makeDeleteTemaController,
  makeEditTemaController,
  makeGetAllTemasController,
  makeGetTemaByIdController,
} from "@main/factories/temas/controllers";
import { Router } from "express";

export const temasRouter = Router();

temasRouter.post("/", adaptRoute(makeCreateTemaController()));

temasRouter.get("/:id", adaptRoute(makeGetTemaByIdController()));

temasRouter.get("/", adaptRoute(makeGetAllTemasController()));

temasRouter.put("/:id", adaptRoute(makeEditTemaController()));

temasRouter.delete("/:id", adaptRoute(makeDeleteTemaController()));
