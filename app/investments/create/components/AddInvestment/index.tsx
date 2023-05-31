'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import createInvestment from '@/lib/createInvestment'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLocalForm } from './useLocalForm'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'

export function AddInvestment() {
  const router = useRouter()
  const form = useLocalForm({
    onSubmit: () => {},
  })

  const handleCreateContract = async () => {
    if (form.isValid) {
      await createInvestment(form.values)
      router.push('/investments')
    }
  }
  console.log(form.values)
  return (
    <>
      <div className="flex items-center">
        <Button className="bg-color-white">
          <Link href="/investments">
            <MoveLeft className="mr-2" />
          </Link>
        </Button>
      </div>
      <div className="container flex items-center justify-center pt-40">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Adicione um investimento</CardTitle>
            <CardDescription>
              Digite o valor e o nome do investimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="investment">Nome</Label>
                  <Input
                    placeholder="Nome do investimento"
                    {...form.getFieldProps('investment')}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="value">Valor</Label>
                  <Input
                    placeholder="Nome do investimento"
                    {...form.getFieldProps('value')}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Cancelar</Button>
            <Button
              onClick={() => handleCreateContract()}
              disabled={!form.isValid}
            >
              Salvar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
