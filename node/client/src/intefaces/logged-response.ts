import { z } from 'zod';

export const LoggedResponse = z.object({
	success: z.boolean(),
	error: z.string().optional()
});

export type LoggedResponse = z.infer<typeof LoggedResponse>;