export default async function getInvestment(investmentId: string) {
  const res = await fetch(
    `http://localhost:3000/api/v1/investments/${investmentId}`,
  )

  if (!res.ok) throw new Error('Failed to fetch user')

  return res.json()
}
