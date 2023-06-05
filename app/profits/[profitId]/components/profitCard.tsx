import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import moment from 'moment'

type Props = {
  promise: Promise<Profit>
}

export default async function ProfitCard({ promise }: Props) {
  const profit = await promise
  const content = (
    <>
      <p className="flex items-center justify-center text-6xl text-white">
        Detalhes do Ganho
      </p>
      <div className="flex items-center justify-center mt-20">
        <Card>
          <CardHeader>
            <CardTitle>{profit.profit}</CardTitle>
            <CardDescription>
              Ganho registrado em:{''}
              {moment(profit.createdAt).format('DD/MM/YYYY')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Valor ganho: R$ {profit.value}</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
  return content
}
