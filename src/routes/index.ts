import { celebrate, Joi } from "celebrate";
import { Router } from "express";
import CoursesController from "../controllers/CoursesController";
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

export default routes;
