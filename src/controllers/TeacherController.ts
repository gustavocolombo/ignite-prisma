import { Teachers } from "@prisma/client";
import { Request, Response } from "express";
import CreateTeacherService from "../services/CreateTeacherService";

export default class TeacherController {
  async handle(request: Request, response: Response):Promise<Teachers> {
    const { name } = request.body;

    const service = new CreateTeacherService();

    const newTeacher = await service.execute({ name });

    return response.json(newTeacher);
  }
}
