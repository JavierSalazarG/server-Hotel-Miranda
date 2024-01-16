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
exports.bookingRouter = void 0;
const express_1 = require("express");
const bookings_1 = require("../services/bookings");
exports.bookingRouter = (0, express_1.Router)();
exports.bookingRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield (0, bookings_1.fetchAllBookings)();
        res.send(bookings);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener reservas" });
    }
}));
exports.bookingRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const booking = yield (0, bookings_1.fetchBookingById)(id);
        if (!booking) {
            return res.status(404).json({ error: "Reserva no encontrada" });
        }
        res.send(booking);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener reserva por ID" });
    }
}));
exports.bookingRouter.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield (0, bookings_1.newBooking)(req.body);
        res.json([{ success: "Creado con éxito" }]);
        res.send(booking);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la reserva" });
    }
}));
exports.bookingRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedBooking = yield (0, bookings_1.updateBooking)(id, updates);
        if (!updatedBooking) {
            return res.status(404).json({ error: "Reserva no encontrada" });
        }
        res.json(updatedBooking);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar la reserva" });
    }
}));
exports.bookingRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, bookings_1.deleteBooking)(id);
    if (data) {
        res.json([{ success: "Booking se ha borrado con exito" }]);
    }
    else {
        res.status(404).json({});
    }
}));
