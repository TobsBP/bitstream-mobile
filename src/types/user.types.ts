import { z } from 'zod';

export const UserSchema = z.object({
  id: z.uuid(),
  username: z.string().min(3).max(30),
  avatar_url: z.string().nullable(),
  title: z.string().nullable(),
  level: z.number(),
  xp: z.number(),
  xp_max: z.number(),
  created_at: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export interface RegisterBody {
  email: string;
  password: string;
  username: string;
}

export interface LoginBody {
  email: string;
  password: string;
}
