import { Suspense } from 'react'

import { Metadata } from 'next'
import ProfitCard from './components/profitCard'
import getInvestment from '@/lib/getInvestment'
import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import getProfit from '@/lib/getProfit'

type Params = {
  params: {
    profitId: string
  }
}

export async function generateMetadata({
  params: { profitId },
}: Params): Promise<Metadata> {
  const profitData: Promise<Profit> = getProfit(profitId)
  const profit: Profit = await profitData
  return {
    title: profit.profit,
    description: `This is the page of ${profit.profit}`,
  }
}

export default async function UserPage({ params: { profitId } }: Params) {
  const profitData: Promise<Profit> = getProfit(profitId)

  const content = (
    <main>
      <div className="flex items-center">
        <Link href="./profits">
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
        <ProfitCard promise={profitData} />
      </Suspense>
    </main>
  )
  return content
}
