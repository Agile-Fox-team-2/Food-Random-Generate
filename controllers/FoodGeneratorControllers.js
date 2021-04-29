const axios = require("axios");

class FoodGeneratorControllers {
	static generateRandomFood(req, res, next) {
		axios
			.get(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`
			)
			.then(({ data }) => {
				console.log(data);
				res.status(200).json(data);
			})
			.catch((err) => {
				// console.log(err);
				// res.status(400).json(err);
				next(err);
			});
	}
}

module.exports = FoodGeneratorControllers;
