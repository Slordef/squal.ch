import { z } from 'zod';

export const ConnectionAttempt = z.object({
	ip: z.string(),
	timestamp: z.number()
});

export type ConnectionAttempt = z.infer<typeof ConnectionAttempt>;