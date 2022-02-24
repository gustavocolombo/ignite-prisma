import { Prisma, Students } from "@prisma/client";
import { Request, Response } from "express";
import CreateStudentService from "../services/CreateStudentService";
import AppError from "../shared/errors/AppError";

export default class CreateStudentController {
  async handle(request: Request, response: Response): Promise<Students> {
    try {
      const { name, registration, graduation } = request.body;

      const service = new CreateStudentService();

      const student = await service.execute({ name, registration, graduation });

      return response.json(student);
    } catch (err) {
      throw new AppError("Operação não realizada");
    }
  }
}
