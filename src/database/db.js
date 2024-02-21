import mongoose from "mongoose";

async function connectDb(){
    await mongoose.connect('mongodb+srv://jfgomes458:SNP5iWrVrSKWr4qS@portfolio.pylwzpy.mongodb.net/?retryWrites=true&w=majority')
}

export default connectDb