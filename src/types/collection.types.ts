import { z } from 'zod';

export const CollectionSchema = z.object({
  id: z.uuid(),
  creator_id: z.uuid(),
  name: z.string().min(1).max(100),
  description: z.string().nullable(),
  created_at: z.string(),
});

export type Collection = z.infer<typeof CollectionSchema>;

export interface CreateCollectionBody {
  name: string;
  description?: string;
}

export interface AddPostToCollectionBody {
  post_id: string;
}
