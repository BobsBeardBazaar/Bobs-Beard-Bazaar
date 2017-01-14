const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in')
  }
  next()
}

const selfOnly = action => (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(403).send(`You can only ${action} yourself.`)
  }
  next()
}

const forbidden = message => (req, res, next) => {
    if (req.user.isAdmin) next(); // If they are an admin, proceed
    else res.status(403).send(message);
}

module.exports = {mustBeLoggedIn, selfOnly, forbidden,}
