export default async function createInvestment(investment: CreateInvestment) {
  const res = await fetch('http://localhost:3000/api/v1/investments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(investment),
  })

  if (!res.ok) throw new Error('Failed to create new investment')

  return res.json()
}
