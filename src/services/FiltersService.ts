import prisma from "../prisma";
import AppError from "../shared/errors/AppError";

export default class FilterService {
  async execute(name: string): Promise<Students[]> {
    try {
      const students = await prisma.students.findMany({
        where: {
          name: {
            startsWith: name,
            mode: "insensitive",
          },
        },
      });

      if (students.length == 0)
        throw new AppError("Nenhum usuário encontrado", 401);

      return students;
    } catch (err) {
      throw new AppError("Operação não realizada");
    }
  }
}
