import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function useContact() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const updateField = (fieldName, value) => {
    setForm((previous) => ({ ...previous, [fieldName]: value }))
    setErrors((previous) => ({ ...previous, [fieldName]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please enter a message.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitted(true)
    setForm(initialForm)
  }

  return {
    form,
    errors,
    isSubmitted,
    updateField,
    handleSubmit,
  }
}

export default useContact
