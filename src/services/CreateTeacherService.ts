import { Prisma, Teachers } from "@prisma/client";
import prisma from "../prisma";
import AppError from "../shared/errors/AppError";

export default class CreateTeacherService {
  async execute(name: string): Promise<Teachers> {
    try {
      const newTeacher = await prisma.teachers.create({
        data: {
          name,
        },
      });

      return newTeacher;
    } catch (err) {
      throw new AppError('Operação não realizada');
    }
  }
}
