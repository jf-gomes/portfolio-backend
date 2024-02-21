import { Router } from "express";
import { sendMsg } from "./controllers/MsgController.js";

const routes = Router()

routes.post('/msg', sendMsg)

export default routes