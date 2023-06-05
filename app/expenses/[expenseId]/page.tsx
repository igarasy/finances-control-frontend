import { Suspense } from 'react'

import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import getExpense from '@/lib/getExpense'
import ExpenseCard from './components/expenseCard'

type Params = {
  params: {
    expenseId: string
  }
}

export async function generateMetadata({
  params: { expenseId },
}: Params): Promise<Metadata> {
  const expenseData: Promise<Expense> = getExpense(expenseId)
  const expense: Expense = await expenseData
  return {
    title: expense.expense,
    description: `This is the page of ${expense.expense}`,
  }
}

export default async function UserPage({ params: { expenseId } }: Params) {
  const profitData: Promise<Expense> = getExpense(expenseId)

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
        <ExpenseCard promise={profitData} />
      </Suspense>
    </main>
  )
  return content
}
