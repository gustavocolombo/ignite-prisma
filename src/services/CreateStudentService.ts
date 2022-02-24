import { Prisma, Students } from "@prisma/client";
import prisma from "../prisma";
import AppError from "../shared/errors/AppError";

export default class CreateStudentService {
  async execute({
    name,
    graduation,
    registration,
  }: Prisma.StudentsCreateInput): Promise<Students> {
    try {
      const studentValidate = await prisma.students.findFirst({
        where: { registration },
      });

      if (studentValidate)
        throw new AppError("Usuário com matrícula já em uso", 401);

      const student = await prisma.students.create({
        data: {
          name,
          registration,
          graduation,
        },
      });

      return student;
    } catch (err) {
      throw new AppError("Operação não realizada");
    }
  }
}
