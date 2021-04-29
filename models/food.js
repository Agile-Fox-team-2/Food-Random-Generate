"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Food extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Food.belongsTo(models.User);
		}
	}
	Food.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "Title must not be empty",
					},
				},
			},
			food_url: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "FoodURL must not be empty",
					},
				},
			},
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "UserId must not be empty",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Food",
		}
	);
	return Food;
};
