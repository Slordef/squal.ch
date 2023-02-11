import { z } from 'zod';

export const ArtImage = z.object({
	id: z.string(),
	name: z.string(),
	link: z.string(),
	description: z.string()
});

export type ArtImage = z.infer<typeof ArtImage>;