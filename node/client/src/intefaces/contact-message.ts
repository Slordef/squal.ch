import { z } from 'zod';

export const ContactMessage = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1),
	recaptcha: z.string().min(1)
});

export type ContactMessage = z.infer<typeof ContactMessage>;