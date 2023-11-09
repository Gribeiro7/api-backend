/*A RESPONSABILIDADE DE CONHECER AS ROTAS DOS USUÁRIOS É DO USER.ROUTES.JS*/
const { Router } = require("express"); /* ROUTER FOI RETIRADO DO PRÓPRIO EXPRESS*/
const multer = require("multer");

const uploadConfig = require("../configs/upload")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");


const usersRoutes = Router(); /* INICIAMOS O ROUTER*/

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.MULTER)

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;