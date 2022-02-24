import { Articles, Prisma } from "@prisma/client";
import prisma from "../prisma";
import AppError from "../shared/errors/AppError";

export default class CreateArticleService {
  async execute(
    { name, description, qtdPaginas }: Prisma.ArticlesCreateInput,
    student_id: string
  ): Promise<Articles> {
    try{
      const article = await prisma.articles.create({
        data: {
          name,
          description,
          qtdPaginas,
          student_id,
        },
      });
  
      return article
    }catch(err){
      throw new AppError('Não foi possível criar o artigo')
    }
  }
}
