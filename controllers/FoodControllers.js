const axios = require("axios");
const { mg } = require("../helpers/mailgun");
const { Food } = require("../models");

class FoodControllers {
	static generateRandomFood(req, res, next) {
		axios
			.get(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`
			)
			.then(({ data }) => {
				const {
					title,
					servings,
					image,
					diets,
					sourceUrl,
					analyzedInstructions,
				} = data.recipes[0];
				res.status(200).json({
					title,
					servings,
					image,
					diets,
					analyzedInstructions,
					sourceUrl,
				});
			})
			.catch((err) => {
				next(err);
			});
	}
	static read(req, res, next) {
		Food.findAll({ where: { UserId: req.userId } })
			.then((data) => {
				res.status(200).json({ success: true, foods: data });
			})
			.catch((err) => {
				next(err);
			});
	}
	static add(req, res, next) {
		const { title, food_url } = req.body;
		Food.create({ title, food_url, UserId: req.userId })
			.then((data) => {
				res.status(200).json({ success: true, food: data });
			})
			.catch((err) => next(err));
	}
	static delete(req, res, next) {
		req.food.destroy();
		res
			.status(200)
			.json({ success: true, message: "Food Successfully Deleted" });
	}
	static sendFood(req, res, next) {
		const { title, food_url } = req.body;
		const data = {
			from: "Food Generator<admin@foodgenerator.com>",
			to: req.userEmail,
			subject: `${title}`,
			text: `Check out your food at ${food_url}`,
		};

		mg.messages().send(data, (error, body) => {
			if (error) {
				next(error);
			}
			res.status(200).json(body);
		});
	}
}

module.exports = FoodControllers;
