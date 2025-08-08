
// This file is kept as a placeholder
// No database schema is needed for the static app

// Contact form validation could be defined here if needed
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  phone: z.string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .nonempty("Phone number is required"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(100, "Message cannot exceed 100 characters")
    .nonempty("Message is required"),
});
