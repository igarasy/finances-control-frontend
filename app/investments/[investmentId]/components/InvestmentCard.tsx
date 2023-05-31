import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import moment from 'moment'

type Props = {
  promise: Promise<Investment>
}

export default async function InvestmentCard({ promise }: Props) {
  const investment = await promise
  const content = (
    <>
      <p className="flex items-center justify-center text-6xl text-white">
        Detalhes do investimento
      </p>
      <div className="flex items-center justify-center mt-20">
        <Card>
          <CardHeader>
            <CardTitle>{investment.investment}</CardTitle>
            <CardDescription>
              Investimento realizado em:{''}
              {moment(investment.createdAt).format('DD/MM/YYYY')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Valor investido: R$ {investment.value}</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
  return content
}
