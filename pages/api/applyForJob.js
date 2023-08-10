const handler = (req, res) => {
  if (req.method === 'POST') {
    try {
      // console.log(reCaptchaRes, "Response from Google reCaptcha verification API");

      // Save data to the database from here
      const {
        name,
        email,
        jobPosition,
        experience,
        resumeName,
        resumeType,
        resumeBase64,
      } = req.body

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
                                Email: ${email}<br>
                                Job Position: ${jobPosition}<br>
                                Experience: ${experience}
                            </p>

                            <p>Regards,<br>
                            CodeGarageTech Team</p>`,
          attachments: [
            {
              content: `${resumeBase64}`,
              filename: `${resumeName}`,
              type: `${resumeType}`,
              disposition: 'attachment',
            },
          ],
        })
        .then(() => {
          res.status(200).json({ status: 'success' })
          mail.send({
            to: email,
            from: process.env.DEFAULT_FROM_EMAIL,
            subject: 'via CodeGarageTech',
            text: 'Job Application',
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
