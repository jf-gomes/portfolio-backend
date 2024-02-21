import Msg from "../models/Msg.js";

async function sendMsg(req, res){
    await Msg.create(req.body)
    return res.status(201).json('Message sent')
}

export { sendMsg }