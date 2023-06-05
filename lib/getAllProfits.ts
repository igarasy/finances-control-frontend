export default async function getAllProfits() {
  const res = await fetch('http://localhost:3000/api/v1/profits')

  if (!res.ok) throw new Error('Failed to fetch profits')

  return res.json()
}
