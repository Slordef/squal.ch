import { z } from 'zod';

export const Settings = z.object({
	homeText: z.string(),
	homeImage: z.string()
});

export type Settings = z.infer<typeof Settings>;