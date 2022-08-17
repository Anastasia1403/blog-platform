import { PostId } from './posts';

export interface Comment {
    postId: PostId,
    id: number,
    name: string,
    email: string,
    body: string,
}
