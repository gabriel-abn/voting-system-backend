import { UnauthorizedError } from "@presentation/errors";
import { HttpResponse } from "./http";

export const badRequest = (error: any): HttpResponse => ({
  status: 400,
  body: error.toString(),
});

export const serverError = (error: any): HttpResponse => ({
  status: 500,
  body: error.toString(),
});

export const unauthorized = (): HttpResponse => ({
  status: 401,
  body: new UnauthorizedError(),
});

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data,
});

export const forbidden = (error: any): HttpResponse => ({
  status: 403,
  body: error.toString(),
});

export const notFound = (error: any): HttpResponse => ({
  status: 404,
  body: error.toString(),
});
