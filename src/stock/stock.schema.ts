import { Schema, model } from "mongoose"

const stockSchema = new Schema(
    {
        name: {
            required: true,
            type: String,
        },
        quantity: {
            required: true,
            type: Number,
        },
        price: {
            required: true,
            type: Number,
        },
        stock_value: {
            required: true,
            type: Number,
        },
    },
    {
        timestamps: true, // Adiciona os campos Criado e Update
    }
)

export default model("stock", stockSchema)
