import { UserType } from './types/user.type';
import UserModel from './user.schema'

export class UserService {
    
    constructor(){}

    // Criar
    async create(user: UserType) {
        const createdUser = await UserModel.create(user)
        return createdUser
    }

    // Listar All
    async list() {
        const listedUsers = await UserModel.find()
        return listedUsers
    }

    // Buscar por ID
    async find(id) {
        const findedUser = await UserModel.findById(id)
        return findedUser
    }

    // Buscar por Nome
    async findByName(name) {
        const findedUsers = await UserModel.find({
            firstName: name
        })
        return findedUsers
    }

    // Alterar
    async update(id, data: UserType) {
        const updatedUser = await UserModel.findOneAndUpdate({_id: id}, {
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            email: data.email
        }, {new: true})

        return updatedUser
    }

    // Deletar
    async delete(id) {
        await UserModel.findByIdAndDelete(id)
        return "Usuario Deletado"
    }
}