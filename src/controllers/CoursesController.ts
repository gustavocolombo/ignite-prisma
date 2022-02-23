import { Courses } from "@prisma/client";
import { Request, Response } from "express";
import CreateCourseService from "../services/CreateCourseService";

export default class CoursesController {
  async handle(request: Request, response: Response): Promise<Courses> {
    const { name, description, duration } = request.body;

    const service = new CreateCourseService();

    const course = await service.execute({ name, description, duration });

    return response.json(course);
  }
}
