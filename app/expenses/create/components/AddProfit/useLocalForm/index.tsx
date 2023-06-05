import { useFormik } from 'formik'
import { LocalFormValues } from './types'
import { validationSchema } from './validation'

export interface UseLocalFormProps {
  initialValues?: LocalFormValues
  onSubmit: () => void
}

export function useLocalForm(props: UseLocalFormProps) {
  const form = useFormik<LocalFormValues>({
    initialValues: {
      expense: '',
      value: 0,
      ...props.initialValues,
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: props.onSubmit,
  })

  // ---------------------------------------------
  // Functions
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    ...form,
  }
}
