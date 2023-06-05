import * as Yup from 'yup'

export const validationSchema = Yup.object({
  expense: Yup.string()
    .required('Campo obrigatória')
    .max(100, 'Limite de 100 caracteres'),
  value: Yup.number().required('Campo obrigatório'),
})
