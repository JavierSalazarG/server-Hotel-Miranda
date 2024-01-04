import express, { Request, Response, Router } from "express";
import { UsersInterface } from "../models/users";
import {
  deleteUser,
  fetchAllUsers,
  fetchUserById,
  newUser,
  updateUser,
} from "../services/users";

export const usersRouter = Router();

usersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await fetchAllUsers();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener users" });
  }
});

usersRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await fetchUserById(id);

    if (!user) {
      return res.status(404).json({ error: "user no encontrada" });
    }

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener user por ID" });
  }
});

usersRouter.post("/new", async (req: Request, res: Response) => {
  try {
    const user = await newUser(req.body);
    res.json([{ success: "Creado con éxito" }]);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el user" });
  }
});

usersRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const updates: Partial<UsersInterface> = req.body;

    const updatedUser = await updateUser(id, updates);

    if (!updatedUser) {
      return res.status(404).json({ error: "user no encontrada" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el user" });
  }
});

usersRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await deleteUser(id);
  if (data) {
    res.json([{ success: "user se ha borrado con exito" }]);
  } else {
    res.status(404).json({});
  }
});
