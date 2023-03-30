import { MissingInvalidParamsError } from "@presentation/errors";
import { IParamsValidation } from "@presentation/protocols";

export class ParamsValidator<T> implements IParamsValidation {
  validate(params: any): Error {
    const missing: string[] = [];

    for (const key in params) {
      if (params[key] === undefined) {
        missing.push(key);
      }
    }

    if (missing.length > 0) {
      return new MissingInvalidParamsError(missing);
    }
  }
}
