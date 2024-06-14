import { z } from "zod";

// step 1 schema
export const step1Schema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(2, { message: "Name should be at least 2 characters long" })
    .max(50, { message: "Name should not exceed 50 characters" }),
  dateOfBirth: z.date({ required_error: "Date of Birth is required" }),
  nationality: z.string().nonempty({ message: "Nationality is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
});

// step 2 schema
export const step2Schema = z.object({
  departureDate: z.date({ required_error: "Departure Date is required" }),
  returnDate: z.date({ required_error: "Return Date is required" }),
  accommodationPreference: z
    .string()
    .nonempty({ message: "Accommodation Preference is required" }),
  preferences: z
    .string()
    .nonempty({ message: "Special Requests or Preferences" }),
});

// step 3 schema
export const step3Schema = z.object({
  healthDeclaration: z
    .string()
    .nonempty({ message: "Health Declaration is required" }),
  egInfoName: z
    .string()
    .nonempty({ message: "Emergency Contact Name is required" }),
  egInfoEmail: z
    .string()
    .nonempty({ message: "Emergency Contact Email is required" }),
  egInfoPhone: z
    .string()
    .nonempty({ message: "Emergency Contact Phone is required" })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
  medicalConditions: z.string().optional(),
});
