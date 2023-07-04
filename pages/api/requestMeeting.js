const handler = (req, res) => {
  console.log('Request call back', req.body)
  const { name, email, phone, message } = req.body
  if (req.method === 'POST') {
    try {
      // Save data to the database from here
      const { phone, date } = req.body
      const mail = require('@sendgrid/mail')
      mail.setApiKey(process.env.SENDGRID_API_KEY)
      mail
        .send({
          to: process.env.DEFAULT_TO_EMAIL,
          from: process.env.DEFAULT_FROM_EMAIL,
          subject: 'via CodeGarageTech',
          text: 'Job Application',
          html: `<p>
                                  Hi,<br>
                              </p>
  
                              <p>Request A Quote from ${name}</p>
                              <p>
                              Email: ${email}<br>
                              Phone No: ${phone}<br>
                              Message: ${message}<br>
                                
                              </p>
  
                              <p>Regards,<br>
                              Codegaragetech</p>`,
        })
        .then(() => {
          res.status(200).json({ status: 'success' })
        })
    } catch (err) {
      res.status(405).json({
        status: 'failure',
        message: 'Error submitting the enquiry form',
      })
    }
  } else {
    res.status(405)
    res.end()
  }
}

export default handler
