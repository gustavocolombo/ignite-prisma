import { Articles } from "@prisma/client";
import { Request, Response } from "express";
import CreateArticleService from "../services/CreateArticlesService";
import AppError from "../shared/errors/AppError";

export default class CreateArticleController {
  async handle(request: Request, response: Response): Promise<Articles> {
    try {
      const { name, description, qtdPaginas } = request.body;

      const { student_id } = request.params;

      const service = new CreateArticleService();

      const newStudent = await service.execute(
        { name, description, qtdPaginas },
        student_id
      );

      return response.json(newStudent);
    } catch (err) {
      throw new AppError("Não foi possível concluir a operação");
    }
  }
}
