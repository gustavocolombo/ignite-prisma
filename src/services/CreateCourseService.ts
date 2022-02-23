import { Courses, Prisma } from "@prisma/client";
import prisma from "../prisma";

export default class CreateCourseService {
  async execute({
    name,
    description,
    duration,
  }: Prisma.CoursesCreateInput): Promise<Courses> {
    const newCourse = await prisma.courses.create({
      data: {
        name,
        description,
        duration,
        teachers: {
          create: {
            name: 'Gustavo Colombo'
          },
        },
      },
    });

    return newCourse;
  }
}
