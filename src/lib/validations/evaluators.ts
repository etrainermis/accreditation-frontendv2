import { z } from "zod";

export const evaluatorSchema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  specializations: z.array(z.string()).default([]),
  active: z.boolean().default(true),
});

export type EvaluatorFormValues = z.infer<typeof evaluatorSchema>;
