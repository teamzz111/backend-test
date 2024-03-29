import IndexController from "../controllers/index.controller";
import { Router } from "express";
import { Routes } from "interfaces/routes.interface";

class IndexRoute implements Routes {
  public path = "/";
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    this.router.post(`${this.path}createUser`, this.indexController.createUser);
    this.router.get(`${this.path}getUsers`, this.indexController.fetchUsers);
  }
}

export default IndexRoute;
