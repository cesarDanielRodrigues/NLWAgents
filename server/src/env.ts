import { z } from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.url().startsWith("postgresql://"),
})
const env = envSchema.parse(process.env)
export default env
