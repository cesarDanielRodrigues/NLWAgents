import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem } from "./ui/form";


const createRoomSchema = z.object({
  name: z.string().min(3, { message: 'Inclua no mínimo 3 caracteres' }),
  description: z.string()
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoomForm() {
  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema)
  })

  function handleCreateRoom(data: CreateRoomFormData) {
    console.log(data)
  }
  return (
    <Card>
      <CardHeader>Criar sala</CardHeader>
      <CardDescription>Crie uma nova sala para começar a fazer perguntas e respostas da I. A.</CardDescription>
      <CardContent>
        <Form {...createRoomForm}>
          <form onSubmit={createRoomForm.handleSubmit(handleCreateRoom)} className="flex flex-col gap-4">
          <FormField control={createRoomForm.control} name="name" render={({field})=>{
            return(
              <FormItem>

              </FormItem>
            )
          }}/>


          </form>
        </Form>
      </CardContent>
    </Card>
  )
}