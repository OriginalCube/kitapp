const readDetails = async (req, res) => {
  res.send("Account controller success!");
};

const createAccount = async (req, res) => {
  res.json(req.body);
};

const loginAccount = async (req, res) => {
  res.json(req.body);
};

module.exports = { readDetails, createAccount, loginAccount };
