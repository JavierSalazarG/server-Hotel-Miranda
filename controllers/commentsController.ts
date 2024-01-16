// import express, { Request, Response, Router } from "express";
// import { CommentsInterface } from "../models/comments";
// import {
//   allComments,
//   deleteComment,
//   newComment,
//   updateComment,
// } from "../services/comments";
// import { commentById } from "../services/comments";

// export const commentsRouter = Router();

// commentsRouter.get("/", async (req: Request, res: Response) => {
//   try {
//     const comment = await allComments();
//     res.send(comment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener comentarios" });
//   }
// });

// commentsRouter.get("/:id", async (req: Request, res: Response) => {
//   try {
//     let id: string = req.params.id;
//     const comment = await commentById(id);
//     if (!comment) {
//       return res.status(404).json({ error: "Comment no encontrado" });
//     }
//     res.send(comment);
//   } catch (error) {
//     console.error(error);
//   }
// });

// commentsRouter.post("/new", async (req: Request, res: Response) => {
//   try {
//     const comment = await newComment(req.body);
//     res.json([{ success: "Creado con éxito" }]);
//     res.send(comment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al crear el comment" });
//   }
// });

// commentsRouter.patch("/:id", async (req: Request, res: Response) => {
//   try {
//     const id: string = req.params.id;
//     const updates: Partial<CommentsInterface> = req.body;

//     const updatedComment = await updateComment(id, updates);

//     if (!updatedComment) {
//       return res.status(404).json({ error: "Comment no encontrado" });
//     }

//     res.json(updatedComment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al actualizar El commentario" });
//   }
// });

// commentsRouter.delete("/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const data = await deleteComment(id);
//   if (data) {
//     res.json([{ success: "comment se ha borrado con exito" }]);
//   } else {
//     res.status(404).json({});
//   }
// });
