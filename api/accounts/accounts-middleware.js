exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.name || !req.body.budget) {
  res.status(400).json({
    message: "name and budget are required."
  })
} else if (req.body.name !== "") {
  res.status(400).json({
    message: "name of account must be a string"
  })
} else if (req.body.name ) {
  res.status(400).json({
    message: "name of account must be between 3 and 100"
  })
} else if (req.body.budget = "") {
  res.status(400).json({
    message: "budget of account must be a number"
  })
} else if (req.body.budget < 0 || budget > 1000000) {
  res.status(400).json({
    message: "budget of account is too large or too small"
  })
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  if (req.body.name === req.body.name)
  res.status(400).json({
    message: "that name is taken"
  })
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
}
