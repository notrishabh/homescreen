const glogin = require("../models/glogin");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();
const clientId = process.env.GLOGIN_CLIENTID;

const client = new OAuth2Client(clientId);

let login = (req, res) => {
	const { tokenId } = req.body;
	client
		.verifyIdToken({
			idToken: tokenId,
			audience: clientId,
		})
		.then((response) => {
			const { email_verified, name, email } = response.payload;
			if (email_verified) {
				glogin.findOne({ email }).exec((err, user) => {
					if (err) {
						return res.status(400).json({
							error: "Something went wrong.",
						});
					} else {
						if (user) {
							const { _id, name, email } = user;
							res.json({
								user: { _id, name, email },
							});
						} else {
							let newUser = new glogin({ name, email });
							newUser.save((err, data) => {
								if (err) {
									return res.status(400).json({
										error: "Something went wrong.",
									});
								} else {
									const { _id, name, email } = newUser;
									res.json({
										user: { _id, name, email },
									});
								}
							});
						}
					}
				});
			}
		});
};

module.exports = { login };
