const handler = (req, res) => {
  // console.log('form submission ', req.body)
  if (req.method === 'POST') {
    try {
      // Save data to the database from here
      const {
        email,
        name,
        phone,
        date,
        query,
        resumeName,
        resumeType,
        resumeBase64,
        requestOrigin,
      } = req.body
      console.log('body', req.body)
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

                            <p>A message has been sent by user</p>
                            <p>
                            Name:${name}<br>
                            Email: ${email}<br>
                                Phone No: ${phone}<br>
                                Appointment: ${date}<br>
                                Query: ${query}<br>
                                Request Origin:${requestOrigin}<br>
                            </p>

                            <p>Regards,<br>
                            Codegaragetech</p>`,
          attachments:
            resumeName !== ''
              ? [
                  {
                    content: `${resumeBase64}`,
                    filename: `${resumeName}`,
                    type: `${resumeType}`,
                    disposition: 'attachment',
                  },
                ]
              : [],
        })
        .then(() => {
          res.status(200).json({ status: 'success' })
          mail.send({
            to: email,
            from: process.env.DEFAULT_FROM_EMAIL,
            subject: 'via CodeGarageTech',
            text: 'Job Application',
            html: `<p>
                                    Hi ${email},<br>
                                </p>

                                <p>We have recieved your email and will contact you soon.</p>

                                <p>Regards,<br>
                                Codegaragetech</p>`,
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
