import getAllExpenses from '@/lib/getAllExpenses'
import { columns } from './columns'
import { DataTable } from './data-table'

export default async function InvestmentsPage() {
  const expenseData: Promise<Expense[]> = getAllExpenses()
  const expenses = await expenseData

  return (
    <div >
      <DataTable columns={columns} data={expenses} />
    </div>
  )
}
