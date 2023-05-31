export default async function getAllInvestments() {
  const res = await fetch('http://localhost:3000/api/v1/investments')

  if (!res.ok) throw new Error('Failed to fetch user')

  return res.json()
}
