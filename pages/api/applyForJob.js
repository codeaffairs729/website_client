const handler = (req, res) => {
    if (req.method === "POST") {
        try {
            fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
            })
            .then((reCaptchaRes) => reCaptchaRes.json())
            .then((reCaptchaRes) => {
                // console.log(reCaptchaRes, "Response from Google reCaptcha verification API");
                if (reCaptchaRes?.score > 0.5) {
                    // Save data to the database from here
                    const { email, jobPosition, experience } = req.body;

                    const mail = require('@sendgrid/mail');
                    mail.setApiKey(process.env.SENDGRID_API_KEY);

                    mail.send({
                        to: process.env.DEFAULT_TO_EMAIL,
                        from: process.env.DEFAULT_FROM_EMAIL,
                        subject: 'via CodeGarageTech',
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
                            Codegaragetech</p>`,
                    }).then(() => {
                        res.status(200).json({ status: 'success' });
                        mail.send({
                            to: email,
                            from: process.env.DEFAULT_FROM_EMAIL,
                            subject: 'via CodeGarageTech',
                            text: message,
                            html: `<p>
                                    Hi ${email},<br>
                                </p>

                                <p>We have recieved your email and will contact you soon.</p>

                                <p>Regards,<br>
                                Codegaragetech</p>`,
                        })
                    });
                } else {
                    res.status(203).json({
                        status: "failure",
                        message: "Google ReCaptcha Failure",
                    });
                }
            });
        } catch (err) {
            res.status(405).json({
                status: "failure",
                message: "Error submitting the enquiry form",
            });
        }
    } else {
        res.status(405);
        res.end();
    }
};

export default handler;