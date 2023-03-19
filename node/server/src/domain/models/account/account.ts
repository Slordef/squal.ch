import { z } from 'zod';

export const Account = z.object({
	id: z.string().optional(),
	name: z.string(),
	email: z.string(),
	password: z.string()
});

export type Account = z.infer<typeof Account>;