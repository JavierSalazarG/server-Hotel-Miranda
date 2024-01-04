import express, { Request, Response, Router } from "express";
import { BookingInterface } from "../models/booking";
import {
  deleteBooking,
  fetchAllBookings,
  fetchBookingById,
  newBooking,
  updateBooking,
} from "../services/bookings";

export const bookingRouter = Router();

bookingRouter.get("/", async (req: Request, res: Response) => {
  try {
    const bookings = await fetchAllBookings();
    res.send(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener reservas" });
  }
});

bookingRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const booking = await fetchBookingById(id);

    if (!booking) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }

    res.send(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener reserva por ID" });
  }
});

bookingRouter.post("/new", async (req: Request, res: Response) => {
  try {
    const booking = await newBooking(req.body);
    res.json([{ success: "Creado con éxito" }]);
    res.send(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la reserva" });
  }
});

bookingRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const updates: Partial<BookingInterface> = req.body;

    const updatedBooking = await updateBooking(id, updates);

    if (!updatedBooking) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }

    res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la reserva" });
  }
});

bookingRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await deleteBooking(id);
  if (data) {
    res.json([{ success: "Booking se ha borrado con exito" }]);
  } else {
    res.status(404).json({});
  }
});
