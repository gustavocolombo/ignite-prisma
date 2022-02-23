import { Courses } from "@prisma/client";
import { Request, Response } from "express";
import CreateCourseService from "../services/CreateCourseService";
import AppError from "../shared/errors/AppError";

export default class CoursesController {
  async handle(request: Request, response: Response): Promise<Courses> {
    try {
      const { name, description, duration } = request.body;

      const service = new CreateCourseService();

      const course = await service.execute({ name, description, duration });

      return response.json(course);
    } catch (err) {
      throw new AppError("Operação não realizada");
    }
  }
}
