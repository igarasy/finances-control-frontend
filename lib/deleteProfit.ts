export default async function deleteProfit(profitId: string) {
  const res = await fetch(
    `http://localhost:3000/api/v1/profits/${profitId}`,
    {
      method: 'DELETE',
   },
  )

  if (!res.ok) throw new Error('Failed to create profit')

  return console.log('Registro deletado')
}
