import { z } from 'zod';

export const AchievementSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  unlocked_at: z.string().nullable(),
});

export const MessageResponseSchema = z.object({
  message: z.string(),
});

export const TokenResponseSchema = z.object({
  token: z.string(),
});

export type Achievement = z.infer<typeof AchievementSchema>;
export type MessageResponse = z.infer<typeof MessageResponseSchema>;
export type TokenResponse = z.infer<typeof TokenResponseSchema>;
