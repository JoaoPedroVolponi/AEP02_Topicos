import express from "express"
import routes from "./routes"
import mongoose from "mongoose"

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void {
        this.express.use(express.json())
    }

    public async database() {
        try {
            mongoose.set("strictQuery", true)
                                                //joaopedro //joao123
            await mongoose.connect('mongodb+srv://joaopedro:joao123@cluster1.vxjbqae.mongodb.net/test')
            console.log("Banco CONECTADO!")
        } catch (err) {
            console.error("ERRO de conexao BANCO!", err)
        }
    }
    public routes(): void {
        this.express.use(routes)
    }
}

export default new App().express