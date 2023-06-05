export default async function createProfit(profit: CreateProfit) {
  const res = await fetch('http://localhost:3000/api/v1/profits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profit),
  })

  if (!res.ok) throw new Error('Failed to create profit')

  return res.json()
}
