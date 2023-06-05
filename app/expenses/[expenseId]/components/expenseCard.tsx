import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import moment from 'moment'

type Props = {
  promise: Promise<Expense>
}

export default async function ExpenseCard({ promise }: Props) {
  const expense = await promise
  const content = (
    <>
      <p className="flex items-center justify-center text-6xl text-white">
        Detalhes do Ganho
      </p>
      <div className="flex items-center justify-center mt-20">
        <Card>
          <CardHeader>
            <CardTitle>{expense.expense}</CardTitle>
            <CardDescription>
              Ganho registrado em:{''}
              {moment(expense.createdAt).format('DD/MM/YYYY')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Valor ganho: R$ {expense.value}</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
  return content
}
