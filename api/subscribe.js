import axios from "axios"
import process from "process"

const mailChimpApiRoute = `https://us4.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`
const headers = {
  Authorization: `Basic ${process.env.MAILCHIMP_API_KEY}`
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body
    try {
      postToMailChimp(email)
    } catch (error) {
      res.send(error.message)
    }
  } else {
    res.send("method not supported")
  }
}


function postToMailChimp(email) {
  const payload = {
    email,
    status: "subscribed"
  }
  axios.post(mailChimpApiRoute, payload, {
    headers
  })
}
