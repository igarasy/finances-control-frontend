export default async function deleteExpense(expenseId: string) {
  const res = await fetch(
    `http://localhost:3000/api/v1/expenses/${expenseId}`,
    {
      method: 'DELETE',
   },
  )

  if (!res.ok) throw new Error('Failed to create profit')

  return console.log('Registro deletado')
}
