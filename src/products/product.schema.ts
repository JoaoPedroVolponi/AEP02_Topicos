import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    quantity:{
        required: true,
        type: Number
    },
    price:{
        required: true,
        type: Number
    }
}, {
    timestamps: true // Adiciona os campos Criado e Update
})

export default model('products', productSchema)
