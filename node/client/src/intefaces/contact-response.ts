import { z } from 'zod';

export const ContactResponse = z.object({
	success: z.boolean(),
	error: z.string()
});

export type ContactResponse = z.infer<typeof ContactResponse>;