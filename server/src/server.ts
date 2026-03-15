import { fastifyCors } from "@fastify/cors"
import { fastify } from "fastify"
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod"
import env from "./env.ts"
import { createQuestion } from "./routes/create-question.ts"
import { createRoomRoute } from "./routes/create-room.ts"
import { getRoomQuestionsRoute } from "./routes/get-room-questions.ts"
import { getRoomsRoute } from "./routes/get-rooms.ts"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: "http://localhost:5173",
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get("/health", () => {
  return "OK"
})

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestionsRoute)
app.register(createQuestion)

app.listen({ port: env.PORT })
