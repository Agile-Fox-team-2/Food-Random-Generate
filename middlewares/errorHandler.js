const errorHandler = (err, req, res, next) => {
	console.error(err.name);
	console.log(err);

	let code;
	let errors = [];
	switch (err.name) {
		case "SequelizeValidationError":
			code = 400;
			errors = err.errors ? err.errors.map((er) => er.message) : [];
			break;
		case "SequelizeUniqueConstraintError":
			code = 400;
			errors = err.errors ? err.errors.map((er) => er.message) : [];
			break;
		case "SignInFailed":
			code = 401;
			errors.push('Wrong email or password');
			break;
		case "InvalidToken":
			code = 401;
			errors.push('Invalid access token');
			break;
		case "MissingToken":
			code = 401;
			errors.push('Missing access token');
			break;
		case "FoodNotFound":
			code = 404;
			errors.push('Food not found');
			break;
		case "UserNotFound":
			code = 404;
			errors.push('User not found');
			break;
		case "InvalidEmail":
			code = 401;
			errors.push('Email account might be wrong or invalid');
			break;
		case 'AccountNotFound':
			errorCode = 401;
			errorMessages.push('Google account has not been registered');
			break;
    case 'AccountAlreadyRegistered':
			errorCode = 401;
			errorMessages.push('Google account is already registered');
			break;
		default:
			code = 500;
			errors.push("Internal server error");
	}
	res.status(code).json({ errors });
};

module.exports = errorHandler;
