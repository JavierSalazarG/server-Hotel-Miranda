
import comments from '../data/comments.json'
import { CommentsInterface } from '../models/comments'

export const allComments =(): CommentsInterface[]  => {
    return comments
}
export const commentById = (id: string): CommentsInterface | undefined => {
    return comments.find((comment_select: CommentsInterface) => comment_select.id === id)
}