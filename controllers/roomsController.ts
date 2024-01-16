// import { Request, Response, Router } from "express";
// import { RoomsInterface } from "../models/rooms";
// import { allRooms, deleteRoom, newRoom, updateRoom } from "../services/rooms";
// import { roomById } from "../services/rooms";

// export const roomsRouter = Router();

// roomsRouter.get("/", async (req: Request, res: Response) => {
//   try {
//     const rooms = await allRooms();
//     res.send(rooms);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener comentarios" });
//   }
// });

// roomsRouter.get("/:id", async (req: Request, res: Response) => {
//   try {
//     let id: string = req.params.id;
//     const room = await roomById(id);
//     if (!room) {
//       return res.status(404).json({ error: "room no encontrado" });
//     }
//     res.send(room);
//   } catch (error) {
//     console.error(error);
//   }
// });

// roomsRouter.post("/new", async (req: Request, res: Response) => {
//   try {
//     const comment = await newRoom(req.body);
//     res.json([{ success: "Creado con éxito" }]);
//     res.send(comment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al crear el room" });
//   }
// });

// roomsRouter.patch("/:id", async (req: Request, res: Response) => {
//   try {
//     const id: string = req.params.id;
//     const updates: Partial<RoomsInterface> = req.body;

//     const updatedComment = await updateRoom(id, updates);

//     if (!updatedComment) {
//       return res.status(404).json({ error: "room no encontrado" });
//     }

//     res.json(updatedComment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al actualizar El commentario" });
//   }
// });

// roomsRouter.delete("/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const data = await deleteRoom(id);
//   if (data) {
//     res.json([{ success: "room se ha borrado con exito" }]);
//   } else {
//     res.status(404).json({});
//   }
// });
