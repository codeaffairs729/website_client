const handler = (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, phone, email, message } = req.body

      const mail = require('@sendgrid/mail')
      mail.setApiKey(process.env.SENDGRID_API_KEY)

      mail
        .send({
          to: process.env.DEFAULT_TO_EMAIL,
          from: process.env.DEFAULT_FROM_EMAIL,
          subject: 'via CodeGarageTech',
          text: message,
          html: `<p>
                        Hi,<br>
                    </p>

                    <p>A message has been sent by user</p>
                    <p>
                        Name: ${name}<br>
                        Phone: ${phone}<br>
                        Email: ${email}<br>
                        Message: ${message}
                    </p>

                    <p>Regards,<br>
                    CodeGarageTech Team</p>`,
        })
        .then(() => {
          res.status(200).json({ status: 'success' })
          mail.send({
            to: email,
            from: process.env.DEFAULT_FROM_EMAIL,
            subject: 'via CodeGarageTech',
            text: message,
            html: `<p>
                            Hi ${name},<br>
                        </p>

                        <p>We have recieved your email and will contact you soon.</p>

                        <p>Regards,<br>
                        CodeGarageTech Team</p>`,
          })
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
