import { Response, Request } from "express";

import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateCategoryService } from "../../services/CreateCategoryService";

class CreateCategoryController {
  constructor(private createCAtegoryUseCase: CreateCategoryUseCase){}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCAtegoryUseCase.execute({name, description});
  
    return response.status(201).send();
  }
}

export { CreateCategoryController };