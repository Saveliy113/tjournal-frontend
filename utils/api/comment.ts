import { OutputData } from '@editorjs/editorjs';
import { AxiosInstance } from 'axios';
import { CommentItem, PostItem } from './types';

type CreateCommentDto = {
  postId: number;
  text: string;
};

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<CommentItem[]>('/comments');
    return data;
  },
  async create(dto: CreateCommentDto) {
    const { data } = await instance.post<
      CreateCommentDto,
      { data: CommentItem }
    >('/comments', dto);
    return data;
  },
  remove(id: number) {
    return instance.delete(`/comments/${id}`);
  },
});
