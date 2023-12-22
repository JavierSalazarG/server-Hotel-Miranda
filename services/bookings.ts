
import bookings from '../data/bookings.json'
import { BookingInterface } from '../models/booking'

export const fetchAllBookings = (): BookingInterface[] => {
    return bookings
}

export const bookingById = (id: string): BookingInterface | undefined => {
    return bookings.find((booking_select: BookingInterface) => booking_select.id === id)

}