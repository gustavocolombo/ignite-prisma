import { Prisma, Teachers } from "@prisma/client";
import prisma from "../prisma";

export default class CreateTeacherService {
  async execute( name: string): Promise<Teachers> {
    const newTeacher = await prisma.teachers.create({
      data:{
        name
      }
    });

    return newTeacher;
  }
}
