import getAllInvestments from '@/lib/getAllInvestments'
import { columns } from './columns'
import { DataTable } from './data-table'

export default async function InvestmentsPage() {
  const investmentsData: Promise<Investment[]> = getAllInvestments()
  const investments = await investmentsData

  return (
    <div >
      <DataTable columns={columns} data={investments} />
    </div>
  )
}
