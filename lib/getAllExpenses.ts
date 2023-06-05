export default async function getAllExpenses() {
  const res = await fetch('http://localhost:3000/api/v1/expenses')

  if (!res.ok) throw new Error('Failed to fetch expenses')

  return res.json()
}
