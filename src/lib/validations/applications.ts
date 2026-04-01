import { z } from "zod";

export const institutionProfileSchema = z.object({
  institutionName: z.string().min(2),
  contactEmail: z.email(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
});

export const accreditationApplicationSchema = z.object({
  institutionId: z.string().min(1),
  programName: z.string().min(2),
  cycle: z.string().min(1),
  notes: z.string().max(2000).optional(),
});

export type InstitutionProfileFormValues = z.infer<typeof institutionProfileSchema>;
export type AccreditationApplicationFormValues = z.infer<typeof accreditationApplicationSchema>;
