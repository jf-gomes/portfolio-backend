import { Router } from "express";
import { sendMsg, getMsg } from "./controllers/MsgController.js";

const routes = Router()

routes.post('/msg', sendMsg)
routes.get('/msg', getMsg)

export default routes