import { z, defineCollection, reference } from "astro:content";

const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
});

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default("Anonymous"),
    // author: reference("authors"),
    language: z.enum(["en", "pl"]).default("pl"),
    subtitle: z.string().optional(),
    editor: z.string().optional(),
    consultingEditor: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publicationDate: z.date().optional(),
    description: z.string().optional(),

    ignore: z.boolean().optional(),
  }),
});

export const collections = {
  authors: authorsCollection,
  articles: articlesCollection,
};
