import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default("Anonymous"),
    language: z.enum(["en", "pl"]).default("pl"),
    subtitle: z.string().optional(),
    editor: z.string().optional(),
    consultingEditor: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publicationDate: z.date().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
