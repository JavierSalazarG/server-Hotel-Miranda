import { CommentsInterface, commentsModel } from "../models/comments";
import { connectSQL } from "../config/sql";
export const allComments = async (): Promise<any> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute("SELECT * FROM comments");
    return resoponse;
  } catch (e) {
    console.error(e);
  }
};
export const commentById = async (id: string): Promise<any | undefined> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute(
      `SELECT * FROM comments WHERE _id = ${id}`
    );
    return resoponse;
  } catch {
    console.error("error al obtener room por id");
  }
};
// export const newComment = async (
//   body: CommentsInterface
// ): Promise<CommentsInterface> => {
//   try {
//     const comment = new commentsModel(body);
//     await comment.save();
//     return comment.toObject();
//   } catch (error) {
//     console.error("Error al crear el Comment:", error);
//     throw error;
//   }
// };

// export const updateComment = async (
//   id: string,
//   updates: Partial<CommentsInterface>
// ): Promise<CommentsInterface | null> => {
//   try {
//     const comment = await commentsModel.findOneAndUpdate({ id }, updates, {
//       new: true,
//     });

//     if (!comment) {
//       console.log("Comment no encontrada");
//       return null;
//     }

//     console.log("Comment actualizada con éxito");
//     return comment.toObject();
//   } catch (error) {
//     console.error("Error al actualizar comentario:", error);
//     throw error;
//   }
// };

export const deleteComment = async (id: string) => {
  try {
    const connection = await connectSQL();
    const [res] = await connection.execute(
      `DELETE FROM comments WHERE _id = ${id}`
    );
    return res;
  } catch (error) {
    console.error("error al borrar");
  }
};
