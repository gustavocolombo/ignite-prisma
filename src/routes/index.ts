import { celebrate, Joi } from "celebrate";
import { Router } from "express";
import CreateArticleController from "../controllers/ArticleController";
import CoursesController from "../controllers/CoursesController";
import FiltersController from "../controllers/FiltersController";
import CreateStudentController from "../controllers/StudentController";
import TeacherController from "../controllers/TeacherController";

const routes = Router();

routes.post(
  "/v1/courses/create",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      duration: Joi.number().required(),
    }),
  }),
  new CoursesController().handle
);
routes.post(
  "/v1/teachers/create",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  new TeacherController().handle
);

routes.post(
  "/v1/articles/create/:student_id",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      qtdPaginas: Joi.number().required(),
    }),
    params: {
      student_id: Joi.string().required(),
    },
  }),
  new CreateArticleController().handle
);

routes.post(
  "/v1/students/create",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      graduation: Joi.string().required(),
      registration: Joi.number().required(),
    }),
  }),
  new CreateStudentController().handle
);

routes.get(
  "/v1/students/get-name/:name",
  celebrate({
    params: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  new FiltersController().filterByName
);

export default routes;
