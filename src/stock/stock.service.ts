import StockModel from "./stock.schema"
import productsmodel from "../products/product.schema"

export class StockService {
    constructor() {}

    // Criar
    async create() {
        const products = await productsmodel.find()

        const stock = await products.map((product) => {
            let stock = {
                name: product.name,
                quantity: product.quantity,
                price: product.price,
                stock_value: product.quantity * product.price,
            }

            StockModel.create(stock)

            return stock
        })

        return stock
    }

    // Listar
    async list() {
        const listedStock = await StockModel.find()

        return listedStock
    }


    // Todo Estoque
    async getStockValue() {
        const stock = await this.list()

        const stockValue = stock.reduce((acc, curr) => {
            acc += curr.stock_value
            return acc
        }, 0)
        return stockValue
    }
}
