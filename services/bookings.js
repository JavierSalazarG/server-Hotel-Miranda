"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.newBooking = exports.fetchBookingById = exports.fetchAllBookings = void 0;
const booking_1 = require("../models/booking");
const fetchAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield booking_1.BookingModel.find();
});
exports.fetchAllBookings = fetchAllBookings;
const fetchBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield booking_1.BookingModel.findOne({ id });
        return booking || null;
    }
    catch (error) {
        console.error("Error al obtener reserva por ID:", error);
        throw error;
    }
});
exports.fetchBookingById = fetchBookingById;
const newBooking = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = new booking_1.BookingModel(body);
        yield booking.save();
        return booking.toObject();
    }
    catch (error) {
        console.error("Error al crear nueva reserva:", error);
        throw error;
    }
});
exports.newBooking = newBooking;
const updateBooking = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield booking_1.BookingModel.findOneAndUpdate({ id }, updates, {
            new: true,
        });
        if (!booking) {
            console.log("Reserva no encontrada");
            return null;
        }
        console.log("Reserva actualizada con éxito");
        return booking.toObject();
    }
    catch (error) {
        console.error("Error al actualizar reserva:", error);
        throw error;
    }
});
exports.updateBooking = updateBooking;
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield booking_1.BookingModel.deleteOne({ id });
    }
    catch (error) {
        console.error("error al borrar");
    }
});
exports.deleteBooking = deleteBooking;
