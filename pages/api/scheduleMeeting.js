const handler = (req, res) => {
  console.log('form submission Mar17 ', req.body)
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
        Dear ${name},<br>
        </p>

        <p>I hope this message finds you well. Thank you for reaching out to <strong>Code Garage</strong>. We greatly appreciate your interest in our services.</p>

        <p>We kindly request more information to ensure we better understand your requirements and can offer you the most suitable assistance. Could you please provide the following details:</p>

        <ul>
            <li>A more detailed description of your project or service requirements.</li>
            <li>Any specific features or functionalities you have in mind?</li>
            <li>Any preferred technologies or platforms.</li>
        </ul>

        <p>Once we have this information, we can tailor our services accordingly. You can reply to this email or schedule a call at your convenience.</p>

        <p>In the meantime, feel free to explore our website to learn more about our services, case studies, and our team.</p>

        <p><strong>Warm regards,</strong><br>
        CodeGarage</p>`,
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
