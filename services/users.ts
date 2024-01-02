
import { UsersInterface } from '../models/users'
import users from '../data/user.json'

export const getAllUsers = (): UsersInterface[] => {
    return users
}

export const userById = (id: string): UsersInterface | undefined => {
return users.find((user:UsersInterface) => user.id === id)
}