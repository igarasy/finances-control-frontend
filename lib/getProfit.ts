export default async function getProfit(profitId: string) {
  const res = await fetch(`http://localhost:3000/api/v1/profits/${profitId}`)

  if (!res.ok) throw new Error('Failed to fetch profit')

  return res.json()
}
