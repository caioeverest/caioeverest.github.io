import emailjs from 'emailjs-com'

const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const SERVICE_ID  = process.env.REACT_APP_SERVICE_ID
const CLIENT_ID   = process.env.REACT_APP_CLIENT_ID

export default async (subject, name, email, message) => {
  try {
    let response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {subject, name, email, message}, CLIENT_ID)
    console.log(`SUCCESS! ${response.status}, ${response.text}`)
  } catch(e) {
    console.log(`FAIL: ${e.message}`)
    throw e
  }
}
