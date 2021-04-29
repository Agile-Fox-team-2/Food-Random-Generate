const mailgun = require("mailgun-js");

const mg = mailgun({
	apiKey: "22385ec7f696caa670bacdb4990f4b8a-4b1aa784-f232f99f",
	domain: "sandbox4d2b2dec74684263959f13fa5f495ceb.mailgun.org",
});

module.exports = { mg };
