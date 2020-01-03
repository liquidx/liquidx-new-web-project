const escapeHtml = require('escape-html')

exports.helloWorld = (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
};
