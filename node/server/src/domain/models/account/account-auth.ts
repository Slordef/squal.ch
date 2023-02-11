import { z } from 'zod';

export const AccountAuth = z.object({
	accountId: z.string(),
	accessToken: z.string(),
	refreshToken: z.string(),
});

export type AccountAuth = z.infer<typeof AccountAuth>;