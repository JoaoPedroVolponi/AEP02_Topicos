import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './user/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'

const routes = Router()
    //  --> Health-check
    routes.get('/health-check', healthCheckController.check)

    // --> Users
        //GET
        routes.get('/users', userController.list)
        routes.get('/users/:id', userController.find)
        routes.get('/users-name', userController.findByName)

        //POST
        routes.post('/users', userController.create)

        //PUT
        routes.put('/users/:id', userController.update)
        
        //DELETE
        routes.delete('/users/:id', userController.delete)


    // --> Products
        //GET
        routes.get('/products', productController.list)
        routes.get('/products/:id', productController.find)
        routes.get('/products-name', productController.findByName)
        

        //POST  
        routes.post('/products', productController.create)

        //PUT
        routes.put('/products/:id', productController.update)

        //DELETE
        routes.delete('/products/:id', productController.delete)

    // --> Products -- RANDOM // WRITE // READ
        //GET
        routes.get("/products-random", productController.random)
        routes.get("/products-write", productController.write)
        routes.get("/products-read", productController.read)
        routes.get('/stock-value', stockController.getStockValue)

        //POST
        routes.post("/stock", stockController.create)

export default routes
