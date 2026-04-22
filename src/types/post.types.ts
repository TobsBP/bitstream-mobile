import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string(),
  user_id: z.uuid(),
  content: z.string().min(5),
  type: z.string(),
  art_url: z.string(),
  created_at: z.string(),
  updated_at: z.string().nullable(),
});

export type Post = z.infer<typeof PostSchema>;

export interface CreatePostBody {
  content: string;
  type: string;
  art_url: string;
}
