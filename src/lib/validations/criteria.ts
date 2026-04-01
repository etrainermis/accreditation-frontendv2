import { z } from "zod";

export const criteriaUploadSchema = z.object({
  title: z.string().min(2),
  version: z.string().min(1),
  fileName: z.string().min(1),
});

export type CriteriaUploadFormValues = z.infer<typeof criteriaUploadSchema>;
