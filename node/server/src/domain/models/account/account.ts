import { z } from 'zod';

export const Account = z.object({
	id: z.optional(z.string()),
	name: z.string(),
	email: z.string(),
	password: z.string()
});

export type Account = z.infer<typeof Account>;