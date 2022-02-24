import { Students } from "@prisma/client";
import { Request, Response } from "express";
import FilterService from "../services/FiltersService";
import AppError from "../shared/errors/AppError";

export default class FiltersController {
  async filterByName(
    request: Request,
    response: Response
  ): Promise<Students[]> {
    try {
      const { name } = request.params;

      const service = new FilterService();

      const findStudents = await service.execute(name);

      return response.json(findStudents);
    } catch (err) {
      throw new AppError("Operação não realizada");
    }
  }
}
