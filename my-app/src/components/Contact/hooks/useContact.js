import { useState } from 'react'
import { submitContactInquiry } from '../../../services/contactInquiryService'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function useContact() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

  const updateField = (fieldName, value) => {
    setForm((previous) => ({ ...previous, [fieldName]: value }))
    setErrors((previous) => ({ ...previous, [fieldName]: '' }))
    setSubmitError('')
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

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await submitContactInquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })

      setIsSubmitted(true)
      setForm(initialForm)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Unable to send your inquiry. Please try again or email us directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    errors,
    isSubmitted,
    isSubmitting,
    submitError,
    updateField,
    handleSubmit,
  }
}

export default useContact
