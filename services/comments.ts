import { CommentsInterface, commentsModel } from "../models/comments";

export const allComments = async (): Promise<CommentsInterface[]> => {
  return await commentsModel.find();
};
export const commentById = async (
  id: string
): Promise<CommentsInterface | undefined> => {
  try {
    const comment = await commentsModel.findOne({ id });
    return comment || undefined;
  } catch {
    console.error("error al obtener comment por id");
  }
};
export const newComment = async (
  body: CommentsInterface
): Promise<CommentsInterface> => {
  try {
    const comment = new commentsModel(body);
    await comment.save();
    return comment.toObject();
  } catch (error) {
    console.error("Error al crear el Comment:", error);
    throw error;
  }
};

export const updateComment = async (
  id: string,
  updates: Partial<CommentsInterface>
): Promise<CommentsInterface | null> => {
  try {
    const comment = await commentsModel.findOneAndUpdate({ id }, updates, {
      new: true,
    });

    if (!comment) {
      console.log("Comment no encontrada");
      return null;
    }

    console.log("Comment actualizada con éxito");
    return comment.toObject();
  } catch (error) {
    console.error("Error al actualizar comentario:", error);
    throw error;
  }
};

export const deleteComment = async (id: string) => {
  try {
    return await commentsModel.deleteOne({ id });
  } catch (error) {
    console.error("error al borrar borrar");
  }
};
