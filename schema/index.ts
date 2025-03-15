import {z} from "zod"

export const todoFormSchema = z.object({
    title: z
      .string()
      .min(2, {message: "Title must be at least 2 characters.",})
      .max(30, {message: "Title must not be longer than 30 characters.",}),
    
      body: z
      .string()
      .max(420, {message: "Description must not be longer than 420 characters.",})
      .optional(),

      completed: z.boolean()
      })
 export  type TodoFormValues = z.infer<typeof todoFormSchema>
  