import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <p className="flex items-center justify-center text-7xl">
        Controle de finanças
      </p>

      <div className="flex flex-col items-center justify-center mt-10">
        <Button className="flex-1 py-2 px-4 mt-5 w-96 bg-slate-700 hover:bg-slate-600">
          <Link href="/investments">Investimentos</Link>
        </Button>
        <Button className="flex-1 py-2 px-4 mt-5 w-96 bg-slate-700 hover:bg-slate-600">
          <Link href="/profits">Ganhos</Link>
        </Button>
        <Button className="flex-1 py-2 px-4 mt-5 w-96 bg-slate-700 hover:bg-slate-600">
          <Link href="/expenses">Gastos</Link>
        </Button>
      </div>
    </main>
  )
}
