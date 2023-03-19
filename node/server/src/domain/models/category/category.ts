import { z } from 'zod';

export const Category = z.object({
	id: z.string(),
	name: z.string(),
	parent: z.string().optional(),
});

export type Category = z.infer<typeof Category>;