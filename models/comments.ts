import { BookingInterface } from "./booking"

export interface CommentsInterface {
    id: string
    nombre: string
    fecha: string
    foto_perfil: string
    archive: boolean
    comentario: string | null
}

