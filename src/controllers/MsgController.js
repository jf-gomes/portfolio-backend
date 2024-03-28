import Msg from "../models/Msg.js";

async function sendMsg(req, res){
    await Msg.create(req.body)
    return res.status(201).json('Message sent')
}

async function getMsg(req, res){
    const messages = await Msg.find()
    return res.status(200).json(messages)
}

export { 
    sendMsg,
    getMsg
}