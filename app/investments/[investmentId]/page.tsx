import { Suspense } from 'react'

import { Metadata } from 'next'
import InvestmentCard from './components/InvestmentCard'
import getInvestment from '@/lib/getInvestment'
import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

type Params = {
  params: {
    investmentId: string
  }
}

export async function generateMetadata({
  params: { investmentId },
}: Params): Promise<Metadata> {
  const investmentData: Promise<Investment> = getInvestment(investmentId)
  const investment: Investment = await investmentData
  return {
    title: investment.investment,
    description: `This is the page of ${investment.investment}`,
  }
}

export default async function UserPage({ params: { investmentId } }: Params) {
  const investmentData: Promise<Investment> = getInvestment(investmentId)

  const content = (
    <main>
      <div className="flex items-center">
        <Link href="./investments">
          <Button className="bg-color-white">
            <MoveLeft className="mr-2" />
          </Button>
        </Link>
      </div>
      <br />
      <Suspense
        fallback={
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            Carregando...
          </svg>
        }
      >
        {/* @ts-expect-error Server Component */}
        <InvestmentCard promise={investmentData} />
      </Suspense>
    </main>
  )
  return content
}
