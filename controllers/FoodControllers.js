const axios = require("axios");

class FoodControllers {
	static generateRandomFood(req, res, next) {
		axios
			.get(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`
			)
			.then(({ data }) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				next(err);
			});
	}
	static read(req, res, next) {}
	static add(req, res, next) {}
	static delete(req, res, next) {}
}

module.exports = FoodControllers;
