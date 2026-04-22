import { z } from 'zod';

export const TrendingHashtagSchema = z.object({
  tag: z.string(),
  count: z.number(),
});

export type TrendingHashtag = z.infer<typeof TrendingHashtagSchema>;
