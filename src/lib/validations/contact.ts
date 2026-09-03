import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name cannot exceed 100 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid corporate or personal email address" })
    .max(120, { message: "Email cannot exceed 120 characters" }),
  phone: z
    .string()
    .max(30, { message: "Phone number is too long" })
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(100, { message: "Company name cannot exceed 100 characters" })
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(150, { message: "Subject cannot exceed 150 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(3000, { message: "Message cannot exceed 3,000 characters" }),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
