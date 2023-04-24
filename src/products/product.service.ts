import { ProductType } from "./types/product.type"
import ProductModel from "./product.schema"
import { writeFile, readFile } from "fs/promises"

export class ProductService {
    constructor() {}

    // Criar
    async create(product: ProductType) {
        try {
            const createdProduct = await ProductModel.create(product)

            return createdProduct
        } catch (err) {
            console.error("create error", err)
        }
    }

    // Listar
    async list() {
        try {
            const listedProducts = await ProductModel.find()

            return listedProducts
        } catch (err) {
            console.error("list error", err)
        }
    }

    // Buscar por id
    async find(id) {
        try {
            const findedProduct = await ProductModel.findById(id)

            return findedProduct
        } catch (err) {
            console.error("find error", err)
        }
    }

    // Buscar por nome
    async findByName(name) {
        try {
            const findedProducts = await ProductModel.find({
                firstName: name,
            })

            return findedProducts
        } catch (err) {
            console.error("find by name error", err)
        }
    }

    // Atualizar - id
    async update(id, data: ProductType) {
        try {
            const updatedProduct = await ProductModel.findOneAndUpdate(
                { _id: id },
                {
                    name: data.name,
                    quantity: data.quantity,
                    price: data.price,
                },
                { new: true }
            )

            return updatedProduct
        } catch (err) {
            console.error("update error", err)
        }
    }

    // Delete por id
    async delete(id) {
        try {
            await ProductModel.findByIdAndDelete(id)

            return "Produto Deletado"
        } catch (err) {
            console.error("Erro ao deletar Produto", err)
        }
    }

    // Produto random
    async random() {
        try {
            const products = await ProductModel.find().limit(10)

            let randomProducts: any = []

            while (randomProducts.length < 4) {
                let randomNumber = Math.floor(Math.random() * products.length)
                let checkObjectValue = false

                for (let i = 0; i < randomProducts.length; i++) {
                    if (randomProducts[i] === products[randomNumber]) {
                        checkObjectValue = true
                    }
                }

                if (!checkObjectValue)
                    randomProducts.push(products[randomNumber])
            }

            return randomProducts
        } catch (err) {
            console.error("random error", err)
        }
    }

    // Escrita
    async write() {
        try {
            const products = await this.list()

            writeFile("products.json", JSON.stringify(products, null, 2))
            console.log('Produtos escritos no products.json')
        } catch (err) {
            console.error("Erro ao escrever", err)
        }
    }

    // Leitura
    async read() {
        try {
            const products = JSON.parse(
                await readFile("products.json", "utf-8")
            )

            return products
        } catch (err) {
            console.error("Erro ao ler", err)
        }
    }
}
