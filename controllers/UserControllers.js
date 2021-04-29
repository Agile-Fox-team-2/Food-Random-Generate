const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const axios = require('axios');
const {OAuth2Client} = require('google-auth-library');

class UserControllers {
	static signIn(req, res, next) {
		const { email, password } = req.body;

		User.findOne({ where: { email } })
			.then((user) => {
				if (user && bcrypt.compareSync(password, user.password)) {
					const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
					res.status(200).json({ access_token });
				} else throw { name: 'SignInFailed' };
			})
			.catch((err) => next(err));
	}

	// static signOut() {}

	static register(req, res, next) {
		const { firstName, lastName, email, password } = req.body;
		console.log(email, "<<<")
		axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API}&email=${email}`)
				.then(response => {
					if (response.data.deliverability === "DELIVERABLE") return User.create({ firstName, lastName, email, password })
					else throw { name: 'InvalidEmail' };
				})
				.then(_ => {
					res.status(201).json({ message: 'User registered successfully' });
				})
				.catch((err) => next(err));
	}

	static googleSignIn(req, res, next) {
		const client = new OAuth2Client(process.env.CLIENT_ID);
		const google_token = req.body.google_token
		async function verify() {
			const ticket = await client.verifyIdToken({
					idToken: google_token,
					audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
					// Or, if multiple clients access the backend:
					//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
			});
			const payload = ticket.getPayload();
			// const userid = payload['sub'];
			// If request specified a G Suite domain:
			// const domain = payload['hd'];
			User.findOne({ where: { email: payload.email } })
				.then((user) => {
					if (user) {
						const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
						res.status(200).json({ access_token });
					} else throw { name: 'AccountNotFound' };
				})
				.catch((err) => next(err));
		}
		verify().catch(console.error);
	}

	static googleRegister(req, res, next) {
		const client = new OAuth2Client(process.env.CLIENT_ID);
		const google_token = req.body.google_token
		async function verify() {
			const ticket = await client.verifyIdToken({
					idToken: google_token,
					audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
					// Or, if multiple clients access the backend:
					//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
			});
			const payload = ticket.getPayload();
			// const userid = payload['sub'];
			// If request specified a G Suite domain:
			// const domain = payload['hd'];
			User.findOne({ where: { email: payload.email } })
				.then((user) => {
					if (!user) {
						return User.create({
							email: payload.email,
							password: process.env.DEFAULT_PASSWORD
						})
					} else throw { name: 'AccountAlreadyRegistered' };
				})
				.then((user) => {
					const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
					res.status(200).json({ access_token });
				})
				.catch((err) => next(err));
		}
		verify().catch(console.error);
	}
	
}

module.exports = UserControllers;
