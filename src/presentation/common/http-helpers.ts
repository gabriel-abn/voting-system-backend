import { UnauthorizedError } from "@presentation/errors";
import { HttpResponse } from "./http";

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  status: 401,
  body: new UnauthorizedError(),
});

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data,
});

export const forbidden = (error: Error): HttpResponse => ({
  status: 403,
  body: error,
});

export const notFound = (error: Error): HttpResponse => ({
  status: 404,
  body: error,
});
