import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const article = defineCollection({
	loader: glob({ pattern: '*/index.md', base: './src/content/article' }),
	schema: z.object({})
})

export const collections = { article }
