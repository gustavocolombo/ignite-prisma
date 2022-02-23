import { Courses, Prisma } from "@prisma/client";
import prisma from "../prisma";
import AppError from "../shared/errors/AppError";

export default class CreateCourseService {
  async execute({
    name,
    description,
    duration,
  }: Prisma.CoursesCreateInput): Promise<Courses> {
    try {
      const newCourse = await prisma.courses.create({
        data: {
          name,
          description,
          duration,
          teachers: {
            create: {
              name: "Gustavo Colombo",
            },
          },
        },
      });

      return newCourse;
    } catch (err) {
      throw new AppError('Operação não realizada');
    }
  }
}
