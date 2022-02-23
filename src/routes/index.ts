import { Router } from "express";
import CoursesController from "../controllers/CoursesController";
import TeacherController from "../controllers/TeacherController";

const routes = Router();

routes.post("/v1/courses/create", new CoursesController().handle);
routes.post("/v1/teachers/create", new TeacherController().handle);

export default routes;
