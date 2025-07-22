import z from "zod";

export const formSchema = z.object({
  FirstName: z.string().min(2).max(50),
  LastName: z.string().min(2).max(50),
  Email: z.email(),
  Message: z.string().min(2),
})