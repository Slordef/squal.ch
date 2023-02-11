import { z } from 'zod';

export const LoginParam = z.object({
	email: z.string().email(),
	password: z.string().min(12)
});

export type LoginParam = z.infer<typeof LoginParam>;

export const LoginResponse = z.object({
	accessToken: z.string()
});

export type LoginResponse = z.infer<typeof LoginResponse>;