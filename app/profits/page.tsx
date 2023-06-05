import { columns } from './columns'
import { DataTable } from './data-table'
import getAllProfits from '@/lib/getAllProfits'

export default async function InvestmentsPage() {
  const profitData: Promise<Profit[]> = getAllProfits()
  const profits = await profitData

  return (
    <div >
      <DataTable columns={columns} data={profits} />
    </div>
  )
}
