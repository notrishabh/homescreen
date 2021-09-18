const Episode = require("../models/episode");
var ObjectId = require("mongodb").ObjectId;

let createEpisode = (req, res, err) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide data",
		});
	}
	if (!body.episodeNumber) {
		body.episodeNumber = 0;
	}
	const episode = new Episode(body);
	if (!episode) {
		return res.status(400).json({
			success: false,
			error: err,
		});
	}
	episode
		.save()
		.then(() => {
			return res.status(200).json({
				success: true,
				id: episode._id,
				message: "Episode Created",
			});
		})
		.catch((err) => {
			return res.status(400).json({
				err,
				message: "Episode not created",
			});
		});
};

let getEpisode = async (req, res, err) => {
	const id = req.query.id;
	var userId = new ObjectId(id);
	await Episode.find({ user: ObjectId(userId) }, (err, episodes) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!episodes.length) {
			return res
				.status(200)
				.json({ success: false, error: "Episode not found" });
		}
		return res.status(200).json({ success: true, allGet: episodes });
	})
		.exec()
		.catch((err) => err.stack);
};

let updateEpisode = async (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: "No body to update provided",
		});
	}
	Episode.findOne({ _id: req.params.id }, (err, episode) => {
		if (err) {
			return res.status(400).json({ err, message: "Not found episode" });
		}
		episode.data = body.data;
		episode.episodeNumber = body.episodeNumber;
		episode.save().then(() => {
			res
				.status(200)
				.json({ success: true, id: episode._id, message: "Episode Updated" });
			return;
		});
	});
};

let deleteEpisode = async (req, res) => {
	await Episode.findOneAndDelete({ _id: req.params.id }, (err, episode) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!episode) {
			return res
				.status(404)
				.json({ success: false, error: "Episode not found" });
		}
		return res.status(200).json({ success: true, data: episode });
	})
		.exec()
		.catch((err) => err.stack);
};

module.exports = { createEpisode, getEpisode, updateEpisode, deleteEpisode };
