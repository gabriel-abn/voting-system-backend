import { adaptRoute } from "@infra/http";
import {
  makeDeleteUserController,
  makeEditUserController,
  makeGetAllUsersController,
  makeGetUserByIdController,
  makeLoginController,
  makeRegisterUserController,
} from "@main/factories/users/controllers";
import { Router } from "express";

export const userRoutes = Router();

userRoutes.post("/register", adaptRoute(makeRegisterUserController()));

userRoutes.get("/all", adaptRoute(makeGetAllUsersController()));

userRoutes.get("/:id", adaptRoute(makeGetUserByIdController()));

userRoutes.put("/edit/:id", adaptRoute(makeEditUserController()));

userRoutes.delete("/delete/:id", adaptRoute(makeDeleteUserController()));

userRoutes.post("/login", adaptRoute(makeLoginController()));
