import axios from "axios";

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
                console.log(reCaptchaRes, "Response from Google reCaptcha verification API");
                if (reCaptchaRes?.score > 0.5) {
                    // Save data to the database from here
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/contact/create',
                        headers: {
                            'Accept': 'application/json',
                        },
                        data: {
                            contact: {
                                name: req.body.name,
                                email: req.body.email,
                                subject: `Message From ${req.body.name}`,
                                message: req.body.message
                            }
                        }
                    })
                    .then(function (response) {
                        res.status(200).json({
                            status: "success",
                            message: "Enquiry submitted successfully",
                        });
                    })
                    .catch(function (error) {
                        res.status(200).json({
                            status: "Error",
                            message: "Something wrong",
                        });
                    });
                } else {
                    res.status(200).json({
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