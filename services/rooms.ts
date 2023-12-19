
import { RoomsInterface } from '../models/rooms'
import rooms from '../data/rooms.json'

export const getAllRooms = (): RoomsInterface[] => {
    return rooms
}

export const roomById = (id: string): RoomsInterface | undefined => {
    return rooms.find((room:RoomsInterface) => room.id ===id)
}