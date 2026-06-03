import { CONTACT_INQUIRY_RECEIVER_EMAIL } from '../constants/contactConfig'

const FORM_SUBMIT_BASE_URL = 'https://formsubmit.co/ajax'

export async function submitContactInquiry({ name, email, message }) {
  const endpoint = `${FORM_SUBMIT_BASE_URL}/${encodeURIComponent(CONTACT_INQUIRY_RECEIVER_EMAIL)}`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Website inquiry from ${name}`,
      _replyto: email,
      _template: 'table',
    }),
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok) {
    const errorMessage =
      payload?.message || 'Unable to send your inquiry. Please try again or email us directly.'
    throw new Error(errorMessage)
  }

  return payload
}
