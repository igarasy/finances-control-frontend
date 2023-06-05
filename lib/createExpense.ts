export default async function createExpense(investment: CreateExpense) {
  const res = await fetch('http://localhost:3000/api/v1/expenses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(investment),
  })

  if (!res.ok) throw new Error('Failed to create new expense')

  return res.json()
}
