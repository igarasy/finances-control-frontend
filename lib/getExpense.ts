export default async function getExpense(expenseId: string) {
  const res = await fetch(`http://localhost:3000/api/v1/expenses${expenseId}`)

  if (!res.ok) throw new Error('Failed to fetch user')

  return res.json()
}
