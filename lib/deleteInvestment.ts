export default async function deleteInvestment(investmentId: string) {
  const res = await fetch(
    `http://localhost:3000/api/v1/investments/${investmentId}`,
    {
      method: 'DELETE',
   },
  )

  if (!res.ok) throw new Error('Failed to create profit')

  return console.log('Registro deletado')
}
