 export interface BookingInterface {
    id: number
    id_habitacion?: string
    nombre: string
    apellidos: string
    fecha_reserva: string
    check_in: string
    check_out: string
    ha_anadido_mensaje: boolean
    mensaje: string | null
    tipo_habitacion: string
numero_habitacion: number
status: string
}