const SettingsBG = require("../models/settingsBG");
var ObjectId = require("mongodb").ObjectId;

let getBG = async (req, res, err) => {
	const id = req.query.id;
	var userId = new ObjectId(id);
	await SettingsBG.find({ user: ObjectId(userId) }, (err, url) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!url.length) {
			return res
				.status(200)
				.json({ success: false, error: "Episode not found" });
		}
		return res.status(200).json({ success: true, url: url });
	})
		.exec()
		.catch((err) => err.stack);
};

let updateBG = async (req, res, err) => {
	const body = req.body;
	const id = body.user;
	var userId = new ObjectId(id);
	await SettingsBG.find({ user: ObjectId(userId) }, (err, present) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!present.length) {
			const bgdata = new SettingsBG(body);
			bgdata
				.save()
				.then(() => {
					return res.status(200).json({
						success: true,
						id: bgdata._id,
						message: "Background Settings Created New",
					});
				})
				.catch((err) => {
					return res.status(400).json({
						err,
						message: "No new settings created",
					});
				});
		} else {
			SettingsBG.findOne({ user: ObjectId(userId) }, (err, setter) => {
				setter.url = body.url;
				setter.save().then(() => {
					res.status(200).json({
						success: true,
						id: present._id,
						message: "Background Settings updated",
					});
					return;
				});
			});
		}
	})
		.exec()
		.catch((err) => err.stack);
};
module.exports = { getBG, updateBG };
