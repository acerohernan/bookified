import { z } from "zod";
import { MAX_FILE_SIZE, ACCEPTED_PDF_TYPES } from "./constants";

export const UploadSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  author: z
    .string()
    .min(1, "Author name is required")
    .max(100, "Author name is too long"),
  persona: z.string().min(1, "Please select a voice"),
  pdfFile: z
    .instanceof(File, { message: "Book PDF is required" })
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `File size must be less than 50MB.`,
    )
    .refine(
      (file) => ACCEPTED_PDF_TYPES.includes(file.type),
      "Only .pdf format is supported.",
    ),
  coverImage: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      `File size must be less than 50MB.`,
    )
    .refine(
      (file) => !file || ACCEPTED_PDF_TYPES.includes(file.type),
      "Only .pdf format is supported.",
    ),
});
