import { Request, Response } from 'express'
import { StockService } from './stock.service'

class StockController {

    // Criar
    async create(req: Request, res: Response) {
        const stock = await new StockService().create()

        return res.status(200).json(stock)
    }

    // Valor Estoque
    async getStockValue(req: Request, res: Response) {
        const stockValue = await new StockService().getStockValue()

        return res.status(200).json(stockValue)
    }
}

export default new StockController()
